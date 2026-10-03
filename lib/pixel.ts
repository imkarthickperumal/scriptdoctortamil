/**
 * lib/pixel.ts
 * ─────────────────────────────────────────────────────────────
 * Lightweight, type-safe wrapper around the Meta Pixel (fbq).
 *
 * Rules followed:
 *  - Never initialises the pixel itself (that is done via the
 *    <Script> tag in MetaPixel.tsx to avoid duplicates).
 *  - Guards every call with `typeof window !== "undefined"` and
 *    an `fbq` existence check so SSR/static export never crashes.
 *  - Exported functions are tree-shakeable pure calls.
 */

/** Extend the Window interface so TypeScript knows fbq exists. */
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
    dataLayer: unknown[];
  }
}

export const PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1599980155160080";

/** Fire a standard Meta Pixel event. */
export function fbqEvent(
  type: "track" | "trackCustom",
  eventName: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) {
    window.fbq(type, eventName, params);
  } else {
    window.fbq(type, eventName);
  }
}

/** PageView — called once on initial page load. */
export function trackPageView(): void {
  fbqEvent("track", "PageView");
}

/**
 * ViewContent — fired when the ebook landing page content is visible.
 * Represents a meaningful engagement with the product page.
 */
export function trackViewContent(): void {
  fbqEvent("track", "ViewContent", {
    content_name: "Kill the Cat E-Book (Tamil & English)",
    content_category: "eBook / Screenwriting",
    content_ids: ["kill-the-cat-ebook"],
    content_type: "product",
    value: 333,
    currency: "INR",
  });
}

/**
 * InitiateCheckout — fired just before the user is redirected to
 * the SuperProfile checkout page.  The actual payment is handled
 * externally so no Purchase event is fired here.
 */
export function trackInitiateCheckout(): void {
  fbqEvent("track", "InitiateCheckout", {
    content_name: "Kill the Cat E-Book (Tamil & English)",
    content_category: "eBook / Screenwriting",
    content_ids: ["kill-the-cat-ebook"],
    num_items: 1,
    value: 333,
    currency: "INR",
  });
}
