// Library Imports
import { useEffect, useRef } from "react";

export const useIntersectionAnimation = (
  onIntersect: (el: HTMLElement) => void,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(entry.target as HTMLElement);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, options]);

  return ref;
};


export default useIntersectionAnimation;
