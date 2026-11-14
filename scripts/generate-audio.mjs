import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const EDGE_TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const EDGE_CHROMIUM_VERSION = "130.0.2849.68";
const EDGE_WIN_EPOCH = 11644473600n;
const EDGE_VOICES = {
  f: "th-TH-PremwadeeNeural",
  m: "th-TH-NiwatNeural",
};

function loadTsModule(relPath) {
  const absPath = join(process.cwd(), relPath);
  const source = readFileSync(absPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const mod = { exports: {} };
  const fn = new Function("exports", "require", "module", transpiled);
  fn(
    mod.exports,
    (id) => {
      if (id.startsWith("./")) {
        return loadTsModule(`src/lib/${id.slice(2)}.ts`);
      }
      return require(id);
    },
    mod,
  );
  return mod.exports;
}

function collectUtterances() {
  const cur = loadTsModule("src/lib/curriculum.ts");
  const script = loadTsModule("src/lib/script-data.ts");
  const texts = new Set(["สวัสดีค่ะ", "สวัสดีครับ"]);

  for (const v of cur.vocabularyCatalog) {
    if (v.thai) texts.add(v.thai);
  }
  for (const p of cur.dailyPhrases) {
    if (p.thai) texts.add(p.thai);
  }
  for (const c of script.consonants) {
    if (c.name) texts.add(c.name);
  }
  for (const v of script.vowels) {
    if (v.thai) texts.add(v.thai);
  }
  for (const t of script.toneExamples) {
    if (t.thai) texts.add(t.thai);
  }
  for (const t of script.toneDrills) {
    if (t.thai) texts.add(t.thai);
  }
  for (const l of cur.lessons) {
    for (const w of l.words) {
      if (w.thai) texts.add(w.thai);
    }
    for (const ex of l.exercises) {
      if (ex.kind === "choice") {
        texts.add(ex.word.thai);
        for (const trap of ex.traps) texts.add(trap.thai);
      } else if (ex.kind === "pairs") {
        for (const pair of ex.pairs) texts.add(pair.thai);
      } else if (ex.kind === "tiles") {
        for (const sp of ["f", "m"]) {
          const phrase = ex.answer.map((tok) => cur.resolveTok(tok, sp).thai).join("");
          if (phrase) texts.add(phrase);
          for (const tok of [...ex.answer, ...ex.extra]) {
            const w = cur.resolveTok(tok, sp);
            if (w.thai) texts.add(w.thai);
          }
        }
      }
    }
  }

  return Array.from(texts).sort((a, b) => a.localeCompare(b, "th"));
}

function hashText(text) {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, 12);
}

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSecMsGec() {
  let ticks = BigInt(Math.floor(Date.now() / 1000)) + EDGE_WIN_EPOCH;
  ticks -= ticks % 300n;
  ticks *= 10000000n;
  return createHash("sha256")
    .update(`${ticks}${EDGE_TRUSTED_CLIENT_TOKEN}`, "ascii")
    .digest("hex")
    .toUpperCase();
}

function edgeTimestamp() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${days[d.getUTCDay()]} ${months[d.getUTCMonth()]} ${pad(d.getUTCDate())} ${d.getUTCFullYear()} ` +
    `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} GMT+0000 (Coordinated Universal Time)`
  );
}

async function fetchEdgeNeuralMp3Once(text, voiceName) {
  if (typeof WebSocket === "undefined") {
    throw new Error("Node 22+ WebSocket is required for Edge Neural TTS");
  }
  const connId = randomUUID().replace(/-/g, "");
  const requestId = randomUUID().replace(/-/g, "");
  const gec = generateSecMsGec();
  const url =
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1` +
    `?TrustedClientToken=${EDGE_TRUSTED_CLIENT_TOKEN}` +
    `&Sec-MS-GEC=${gec}` +
    `&Sec-MS-GEC-Version=1-${EDGE_CHROMIUM_VERSION}` +
    `&ConnectionId=${connId}`;

  return new Promise((resolve, reject) => {
    const chunks = [];
    let settled = false;
    const ws = new WebSocket(url, {
      headers: {
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
        "User-Agent":
          `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ` +
          `(KHTML, like Gecko) Chrome/${EDGE_CHROMIUM_VERSION.split(".")[0]}.0.0.0 Safari/537.36 Edg/${EDGE_CHROMIUM_VERSION.split(".")[0]}.0.0.0`,
      },
    });
    ws.binaryType = "arraybuffer";

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      try {
        ws.close();
      } catch {
        // ignore
      }
      reject(new Error(`Edge TTS timeout for ${text}`));
    }, 15000);

    const finish = (err, buf) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try {
        ws.close();
      } catch {
        // ignore
      }
      if (err) reject(err);
      else resolve(buf);
    };

    ws.addEventListener("open", () => {
      const tsHeader = edgeTimestamp();
      const configMsg =
        `X-Timestamp:${tsHeader}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;
      ws.send(configMsg);

      const ssml =
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='th-TH'>` +
        `<voice name='${voiceName}'>` +
        `<prosody pitch='+0Hz' rate='-8%' volume='+0%'>${escapeXml(text)}</prosody>` +
        `</voice></speak>`;
      const ssmlMsg =
        `X-RequestId:${requestId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${tsHeader}Z\r\n` +
        `Path:ssml\r\n\r\n${ssml}`;
      ws.send(ssmlMsg);
    });

    ws.addEventListener("message", (event) => {
      if (typeof event.data === "string") {
        if (event.data.includes("Path:turn.end")) {
          const out = Buffer.concat(chunks);
          if (out.length < 256) {
            finish(new Error(`Edge TTS empty audio (${out.length} bytes) for ${text}`));
          } else {
            finish(null, out);
          }
        }
        return;
      }
      const frame = Buffer.from(event.data);
      if (frame.length < 2) return;
      const headerLen = frame.readUInt16BE(0);
      const header = frame.subarray(2, 2 + headerLen).toString("utf8");
      if (header.includes("Path:audio")) {
        const audioData = frame.subarray(2 + headerLen);
        if (audioData.length > 0) chunks.push(audioData);
      }
    });

    ws.addEventListener("error", (event) => {
      const msg = "message" in event && typeof event.message === "string" ? event.message : "WebSocket error";
      finish(new Error(`Edge TTS connection rejected (${msg})`));
    });

    ws.addEventListener("close", (event) => {
      if (!settled) {
        finish(new Error(`Edge TTS closed unexpectedly (code ${event.code})`));
      }
    });
  });
}

async function fetchEdgeNeuralMp3(text, voiceName, attempt = 1) {
  try {
    return await fetchEdgeNeuralMp3Once(text, voiceName);
  } catch (err) {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      return fetchEdgeNeuralMp3(text, voiceName, attempt + 1);
    }
    throw err;
  }
}

async function fetchGoogleThaiMp3(text, attempt = 1) {
  const url =
    `https://translate.google.com/translate_tts` +
    `?ie=UTF-8&tl=th&client=tw-ob&ttsspeed=0.9&q=${encodeURIComponent(text)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
    },
  });
  if (!res.ok) {
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      return fetchGoogleThaiMp3(text, attempt + 1);
    }
    throw new Error(`TTS HTTP ${res.status} for ${text}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 256) {
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      return fetchGoogleThaiMp3(text, attempt + 1);
    }
    throw new Error(`TTS empty payload (${buf.length} bytes) for ${text}`);
  }
  return buf;
}

async function generatePack({ texts, outDir, concurrency, fetchFn }) {
  mkdirSync(outDir, { recursive: true });
  const manifest = {};
  let generated = 0;
  let cached = 0;
  let failed = 0;
  let totalBytes = 0;

  const queue = texts.map((text) => ({ text, id: hashText(text) }));
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;
      const dest = join(outDir, `${item.id}.mp3`);
      if (existsSync(dest) && statSync(dest).size >= 256) {
        manifest[item.text] = item.id;
        cached += 1;
        totalBytes += statSync(dest).size;
        continue;
      }
      try {
        const mp3 = await fetchFn(item.text);
        writeFileSync(dest, mp3);
        manifest[item.text] = item.id;
        generated += 1;
        totalBytes += mp3.length;
      } catch {
        failed += 1;
      }
    }
  });

  await Promise.all(workers);

  const sorted = Object.fromEntries(
    Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b, "th")),
  );
  writeFileSync(join(outDir, "manifest.json"), JSON.stringify(sorted), "utf8");

  return {
    utterances: texts.length,
    generated,
    cached,
    failed,
    totalMb: Number((totalBytes / (1024 * 1024)).toFixed(2)),
  };
}

async function probeEdgeNeural() {
  try {
    const sample = await fetchEdgeNeuralMp3Once("สวัสดี", EDGE_VOICES.f);
    return sample.length >= 256;
  } catch {
    return false;
  }
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const edgeOnly = args.has("--edge");
  const texts = collectUtterances();
  const baseDir = join(process.cwd(), "public", "audio", "th");

  if (!edgeOnly) {
    const baseStats = await generatePack({
      texts,
      outDir: baseDir,
      concurrency: 6,
      fetchFn: fetchGoogleThaiMp3,
    });
    console.log(JSON.stringify({ pack: "fallback", ...baseStats }));
  }

  const edgeAvailable = await probeEdgeNeural();
  if (!edgeAvailable) {
    const msg =
      "Edge Neural TTS (speech.platform.bing.com) blocked or unreachable from this IP; " +
      "run `npm run audio:generate:edge` on a local machine to generate dual female (PremwadeeNeural) " +
      "and male (NiwatNeural) packs under public/audio/th/f and public/audio/th/m.";
    if (edgeOnly) {
      console.error(msg);
      process.exit(1);
    }
    for (const speaker of Object.keys(EDGE_VOICES)) {
      const spDir = join(baseDir, speaker);
      const spManifest = join(spDir, "manifest.json");
      if (!existsSync(spManifest)) {
        mkdirSync(spDir, { recursive: true });
        writeFileSync(spManifest, "{}", "utf8");
      }
    }
    console.log(JSON.stringify({ pack: "edge", skipped: true, reason: "endpoint unreachable from this IP" }));
    return;
  }

  for (const [speaker, voiceName] of Object.entries(EDGE_VOICES)) {
    const stats = await generatePack({
      texts,
      outDir: join(baseDir, speaker),
      concurrency: 4,
      fetchFn: (text) => fetchEdgeNeuralMp3(text, voiceName),
    });
    console.log(JSON.stringify({ pack: `edge-${speaker}`, voice: voiceName, ...stats }));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
