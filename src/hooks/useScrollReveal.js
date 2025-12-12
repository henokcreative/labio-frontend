import { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Default animation settings
    const observerOptions = {
      threshold: 0.2, // 20% visible triggers animation
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When element becomes visible
        if (entry.isIntersecting) {
          element.classList.add("reveal-active");
        } else {
          // Allow re-trigger on scroll UP or DOWN
          element.classList.remove("reveal-active");
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return ref;
};

export default useScrollReveal;