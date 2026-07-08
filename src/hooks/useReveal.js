import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to the returned ref and flips
 * `isVisible` to true the first time the element enters the viewport.
 * Used to drive the `.reveal` CSS utility for scroll-triggered animation.
 */
export function useReveal(options = {}) {
  const { threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
