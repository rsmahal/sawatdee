import { createFileRoute } from "@tanstack/react-router";
import type { TtsSpeaker } from "@/lib/edge-tts.server";

export const Route = createFileRoute("/api/tts")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { getEdgeThaiMp3, probeEdgeTts } = await import("@/lib/edge-tts.server");
        const url = new URL(request.url);
        if (url.searchParams.get("probe") === "1") {
          const status = await probeEdgeTts();
          return Response.json(status, {
            headers: {
              "Cache-Control": "no-store",
            },
          });
        }

        const text = (url.searchParams.get("text") ?? "").trim();
        if (!text || text.length > 300) {
          return Response.json({ error: "Invalid text parameter" }, { status: 400 });
        }

        const speakerParam = url.searchParams.get("speaker");
        const speaker: TtsSpeaker = speakerParam === "m" ? "m" : "f";

        try {
          const mp3 = await getEdgeThaiMp3(text, speaker);
          return new Response(new Uint8Array(mp3), {
            status: 200,
            headers: {
              "Content-Type": "audio/mpeg",
              "Content-Length": String(mp3.length),
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        } catch (err: unknown) {
          const reason = err instanceof Error ? err.message : String(err);
          console.warn(`[api/tts] Synthesis failed (${speaker}): ${reason}`);
          return Response.json({ error: reason }, { status: 502 });
        }
      },
    },
  },
});
