import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 *
 * Purpose: Automatically scrolls to the top of the page when navigating between routes
 *
 * Problem Solved:
 * In React SPAs, when navigating to a new route, the browser maintains the scroll
 * position from the previous page. This component ensures users always see the top
 * of the new page when they navigate.
 *
 * How it works:
 * 1. Listens for route changes using useLocation() hook
 * 2. When pathname changes, scrolls window to top (0, 0)
 * 3. Uses 'instant' behavior for immediate scroll (no animation)
 *
 * Usage:
 * Place this component inside <Router> but before <Routes>
 * It doesn't render any visible content (returns null)
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated scroll
    });

    // Alternative method for older browsers that don't support behavior option:
    // window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect whenever pathname changes

  // This component doesn't render anything
  return null;
}
