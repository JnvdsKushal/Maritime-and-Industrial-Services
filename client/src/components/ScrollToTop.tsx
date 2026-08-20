import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Scrolls the window to the top whenever the route changes.
 *
 * Wouter's `useLocation()` works anywhere in the tree (no router
 * context needed), so this is mounted once in `App.tsx` and covers
 * every navigation source — Navbar links, Footer links, CTA buttons,
 * and programmatic `setLocation()` calls — without touching any of
 * the individual navigation call sites.
 *
 * Browser back/forward is intentionally left alone: most browsers
 * already restore the previous scroll position for that case
 * (history.scrollRestoration), which is the behavior users expect.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  return null;
}
