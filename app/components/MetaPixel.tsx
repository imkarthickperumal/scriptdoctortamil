"use client";

/**
 * app/components/MetaPixel.tsx
 * ─────────────────────────────────────────────────────────────
 * Loads the Meta Pixel base script once via next/script
 * (strategy="afterInteractive" = the Next.js default, fires after
 * hydration, never duplicated across navigations).
 *
 * Also fires PageView + ViewContent on mount, guarded by a ref so
 * they never fire twice even under React Strict Mode double-invoke.
 */

import Script from "next/script";
import { useEffect, useRef } from "react";
import { PIXEL_ID, trackPageView, trackViewContent } from "@/lib/pixel";

export default function MetaPixel() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    // Small delay to ensure fbq is available after script loads
    const id = setTimeout(() => {
      trackPageView();
      trackViewContent();
    }, 300);
    return () => clearTimeout(id);
  }, []);

  if (!PIXEL_ID || PIXEL_ID === "YOUR_PIXEL_ID_HERE") return null;

  return (
    <>
      {/* Meta Pixel base code — initialises fbq and queues events */}
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
`,
        }}
      />
      {/* NoScript fallback pixel image */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
