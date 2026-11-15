import { createHash, randomBytes, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const EDGE_TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const EDGE_CHROMIUM_VERSION = "143.0.3650.75";
const EDGE_CHROMIUM_MAJOR = EDGE_CHROMIUM_VERSION.split(".")[0];
const EDGE_SEC_MS_GEC_VERSION = `2-${EDGE_CHROMIUM_VERSION}`;
const EDGE_WIN_EPOCH = 11644473600;
const EDGE_S_TO_NS = 1e9;
const EDGE_VOICES = {
  f: "th-TH-PremwadeeNeural",
  m: "th-TH-NiwatNeural",
};

const SHA256_INITIAL = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
  0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
];
const SHA256_STATE = [
  0xfd9fbea2, 0x91243ce7, 0xbe499094, 0xcd2e1e0a,
  0x6c006f49, 0x04bd35ab, 0xfeb0a7e4, 0x03effbd2,
];
const SHA256_SCHEDULE = [
  0xeb24bf9e, 0x1558691f, 0xa0c09ee2, 0x0cfa32ba,
  0xa622ee8c, 0xd1dd9491, 0xc0dd25a0, 0xf9e70ab6,
  0xf0c31573, 0x7058ce4e, 0x7188e606, 0x00e5ab33,
  0xd258b060, 0x72766564,
];
const SHA256_ROUND_CONSTANTS = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];
const SHA256_ADJUSTMENT = 0xc9dc06a7;
const SHA256_BLOCK_CONSTANTS = [
  ...SHA256_ROUND_CONSTANTS.slice(0, 14),
  SHA256_ADJUSTMENT,
  ...SHA256_ROUND_CONSTANTS.slice(15),
];
const SHA256_SIGMA0_ADJUSTMENT = 0x059c0b80;
const SHA256_SIGMA1_ADJUSTMENT = 0x000b92c0;
const CS64_COEFFICIENTS = [
  [0xe82e91b1, 0xb32700d0],
  [0x44de24c6, 0x88dff51d],
  [0x3beb65bc, 0x29514038],
  [0xc89c5933, 0xb328cbdf],
  [0x8d1ec211, 0xd405b4d5],
  [0x314ef5d5, 0x26e55f3c],
  [0xe92491b1, 0x607801c6],
  [0xf0a5b9d5, 0x82b2c1fb],
  [0x06064cf3, 0xfa51a3da],
  [0xda79fa60, 0x207cc464],
  [0xbed20560, 0x3c3c74f3],
  [0x89f9c9f8, 0xd2d14b61],
  [0x35fa38c6, 0xbb04a2c1],
  [0xcb49e3c6, 0xc5626167],
];
const CS64_FACTOR = 0x82893933;
const CS64_ADJUSTMENT0 = 0xf2f90b1a;
const CS64_ADJUSTMENT1 = 0x0b1a0000;

const rotr = (x, n) => ((x >>> n) | (x << (32 - n))) >>> 0;
const rol16 = (x) => ((x << 16) | (x >>> 16)) >>> 0;
const sigma0 = (x) => (rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3)) >>> 0;
const sigma1 = (x) => (rotr(x, 17) ^ rotr(x, 19) ^ (x >>> 10)) >>> 0;

function expandSchedule(words, firstWord = 16) {
  for (let i = firstWord; i < 64; i++) {
    words[i] = (sigma1(words[i - 2]) + words[i - 7] + sigma0(words[i - 15]) + words[i - 16]) >>> 0;
  }
}

function sha256Rounds(state, words, firstRound = 0) {
  let [a, b, c, d, e, f, g, h] = state;
  const constants = firstRound === 14 ? SHA256_BLOCK_CONSTANTS : SHA256_ROUND_CONSTANTS;
  for (let i = firstRound; i < 64; i++) {
    const s1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
    const ch = (e & f) ^ (~e & g);
    const t1 = (h + s1 + ch + constants[i] + words[i]) >>> 0;
    const s0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
    const maj = (a & b) ^ (a & c) ^ (b & c);
    const t2 = (s0 + maj) >>> 0;
    h = g;
    g = f;
    f = e;
    e = (d + t1) >>> 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + t2) >>> 0;
  }
  return [a, b, c, d, e, f, g, h];
}

function sha256Init(data7) {
  const words = new Array(64).fill(0);
  words[14] = ((data7[0] << 16) | (data7[1] << 8) | data7[2]) >>> 0;
  words[15] = ((data7[3] << 24) | (data7[4] << 16) | (data7[5] << 8) | data7[6]) >>> 0;
  for (let i = 16; i < 30; i++) {
    let val = SHA256_SCHEDULE[i - 16];
    if (i - 2 >= 14) {
      val += i === 16 ? (sigma1(words[i - 2]) ^ SHA256_SIGMA1_ADJUSTMENT) >>> 0 : sigma1(words[i - 2]);
    }
    if (i - 7 >= 14) val += words[i - 7];
    if (i - 15 >= 14) {
      val += i === 29 ? (sigma0(words[i - 15]) ^ SHA256_SIGMA0_ADJUSTMENT) >>> 0 : sigma0(words[i - 15]);
    }
    words[i] = val >>> 0;
  }
  words[30] =
    (sigma1(words[28]) +
      words[23] +
      sigma0(words[15]) +
      words[14] +
      SHA256_ADJUSTMENT -
      SHA256_ROUND_CONSTANTS[14]) >>>
    0;
  expandSchedule(words, 31);
  const working = sha256Rounds(SHA256_STATE, words, 14);
  return SHA256_INITIAL.map((x, idx) => (x + working[idx]) >>> 0);
}

function sha256Digest(data) {
  const len = 57 + data.length;
  const rem = data.subarray(7);
  const padZeroCount = (((55 - len) % 64) + 64) % 64;
  const padded = Buffer.alloc(rem.length + 1 + padZeroCount + 8);
  rem.copy(padded, 0);
  padded[rem.length] = 0x80;
  padded.writeBigUInt64BE(BigInt(len) * 8n, padded.length - 8);
  let state = sha256Init(data.subarray(0, 7));
  for (let off = 0; off < padded.length; off += 64) {
    const words = new Array(64).fill(0);
    for (let j = 0; j < 16; j++) words[j] = padded.readUInt32BE(off + j * 4);
    expandSchedule(words, 16);
    const working = sha256Rounds(state, words, 0);
    state = state.map((x, idx) => (x + working[idx]) >>> 0);
  }
  const out = Buffer.alloc(32);
  for (let i = 0; i < 8; i++) out.writeUInt32BE(state[i], i * 4);
  return out;
}

function wordsLe4Even(buf) {
  const pad = (((-buf.length) % 4) + 4) % 4;
  const padded = Buffer.concat([buf, Buffer.alloc(pad)]);
  const words = [];
  for (let i = 0; i < padded.length; i += 4) words.push(padded.readUInt32LE(i));
  if (words.length % 2 === 1) words.push(0);
  return words;
}

function cs64Digest(data, digest) {
  const keyA = (digest.readUInt32LE(0) | 1) >>> 0;
  const keyB = (digest.readUInt32LE(4) | 1) >>> 0;
  const factors = [Math.imul(keyA, CS64_FACTOR) >>> 0, Math.imul(keyB, CS64_FACTOR) >>> 0];
  const terms = CS64_COEFFICIENTS.map(([coeff], idx) => Math.imul(coeff, factors[idx % 2]) >>> 0);
  const offsets = CS64_COEFFICIENTS.map(([, offset]) => offset >>> 0);
  const wdata = wordsLe4Even(Buffer.concat([Buffer.from([0]), data]));
  wdata.forEach((word, idx) => {
    let term = Math.imul(word, idx % 2 === 0 ? keyA : keyB) >>> 0;
    let offset = Math.imul(rol16(word), idx % 2 === 0 ? 0xef0569fb : 0xc31713db) >>> 0;
    if (idx === 0) {
      term = (term + Math.imul(CS64_ADJUSTMENT0, factors[0])) >>> 0;
      offset = (offset + CS64_ADJUSTMENT1) >>> 0;
    }
    terms.push(term);
    offsets.push(offset);
  });
  let swapAcc = 0;
  let swapLast = 0;
  let state = 0;
  let acc = 0;
  for (let i = 0; i < terms.length; i += 2) {
    const x = terms[i];
    const y = terms[i + 1];
    let t = rol16((offsets[i] + x) >>> 0);
    let q = Math.imul(t, 0x76f50f34) >>> 0;
    swapAcc = (swapAcc + Math.imul(rol16(q), 0xc3efea97) + q) >>> 0;
    t = rol16((offsets[i + 1] + y) >>> 0);
    q = Math.imul(t, 0x1881ce3c) >>> 0;
    swapLast = (Math.imul(rol16(q), 0x35bd1ec9) + q) >>> 0;
    swapAcc = (swapAcc + swapLast) >>> 0;
    state = (Math.imul(state, keyA) + x) >>> 0;
    state = Math.imul(rol16(state), 0xcf98b111) >>> 0;
    state = Math.imul(rol16(state), 0x87085b9f) >>> 0;
    state = Math.imul(rol16(state), 0x12ceb96d) >>> 0;
    state = Math.imul(rol16(state), 0x257e1d83) >>> 0;
    acc = (acc + state) >>> 0;
    t = (Math.imul(state, keyB) + y) >>> 0;
    t = Math.imul(rol16(t), 0xa27416f5) >>> 0;
    t = Math.imul(rol16(t), 0xd38396ff) >>> 0;
    state = Math.imul(rol16(Math.imul(rol16(t), 0x7c932b89) >>> 0), 0xbfa49f69) >>> 0;
    acc = (acc + state) >>> 0;
  }
  const out = Buffer.alloc(8);
  out.writeUInt32LE((swapLast ^ state) >>> 0, 0);
  out.writeUInt32LE((swapAcc ^ acc) >>> 0, 4);
  return out.toString("hex").toUpperCase();
}

function generateSecMsGecV2() {
  let ticks = Math.floor(Date.now() / 1000) + EDGE_WIN_EPOCH;
  ticks -= ticks % 300;
  ticks *= EDGE_S_TO_NS / 100;
  const data = Buffer.from(`${Math.round(ticks)}${EDGE_TRUSTED_CLIENT_TOKEN}`, "ascii");
  const digest = sha256Digest(data);
  const cs64 = cs64Digest(data, digest);
  return `${cs64}-${digest.toString("hex").toUpperCase()}`;
}

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
  const gec = generateSecMsGecV2();
  const muid = randomBytes(16).toString("hex").toUpperCase();
  const url =
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1` +
    `?TrustedClientToken=${EDGE_TRUSTED_CLIENT_TOKEN}` +
    `&Sec-MS-GEC=${gec}` +
    `&Sec-MS-GEC-Version=${EDGE_SEC_MS_GEC_VERSION}` +
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
          `(KHTML, like Gecko) Chrome/${EDGE_CHROMIUM_MAJOR}.0.0.0 Safari/537.36 Edg/${EDGE_CHROMIUM_MAJOR}.0.0.0`,
        Cookie: `muid=${muid};`,
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
    }, 12000);

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
    if (attempt < 5) {
      const delayMs = Math.min(8000, 750 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 400);
      await new Promise((r) => setTimeout(r, delayMs));
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
  let lastReason = "endpoint unreachable";
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const sample = await fetchEdgeNeuralMp3Once("สวัสดี", EDGE_VOICES.f);
      if (sample.length >= 256) return { ok: true, reason: null };
      lastReason = `empty payload (${sample.length} bytes)`;
    } catch (err) {
      lastReason = err instanceof Error ? err.message : String(err);
    }
    if (attempt < 2) await new Promise((r) => setTimeout(r, 400));
  }
  return { ok: false, reason: lastReason };
}

function hasMissingClips(texts, outDir) {
  return texts.some((text) => {
    const dest = join(outDir, `${hashText(text)}.mp3`);
    return !existsSync(dest) || statSync(dest).size < 256;
  });
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

  const edgeNeedsFetch = Object.keys(EDGE_VOICES).some((speaker) =>
    hasMissingClips(texts, join(baseDir, speaker)),
  );

  if (edgeNeedsFetch) {
    const edgeProbe = await probeEdgeNeural();
    if (!edgeProbe.ok) {
      const msg =
        `Edge Neural TTS (speech.platform.bing.com) blocked or unreachable (${edgeProbe.reason}); ` +
        "keeping existing/fallback manifests.";
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
      console.log(JSON.stringify({ pack: "edge", skipped: true, reason: edgeProbe.reason }));
      return;
    }
  }

  for (const [speaker, voiceName] of Object.entries(EDGE_VOICES)) {
    const stats = await generatePack({
      texts,
      outDir: join(baseDir, speaker),
      concurrency: 3,
      fetchFn: (text) => fetchEdgeNeuralMp3(text, voiceName),
    });
    console.log(JSON.stringify({ pack: `edge-${speaker}`, voice: voiceName, ...stats }));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
