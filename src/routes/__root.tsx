import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppNotFoundComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Sawatdee - Learn Thai";
const APP_DESC = "A pocket course in spoken Thai: script, tones, vocabulary, and polite particles.";

export const Route = createRootRoute({
  notFoundComponent: AppNotFoundComponent,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: APP_DESC,
      },
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESC },
      { name: "theme-color", content: "#E23A2F" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var s=JSON.parse(localStorage.getItem("sawatdee-v1")||"{}").state||{};if(s.theme==="dark")document.documentElement.classList.add("dark");if(s.scriptStyle==="traditional")document.documentElement.classList.add("thai-traditional");}catch(e){}})();',
          }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
