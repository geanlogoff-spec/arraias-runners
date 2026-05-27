"use client";

/**
 * Tracks a custom event in Google Analytics 4 (GA4).
 * Safe to call on both client side (will check for window.gtag).
 */
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
