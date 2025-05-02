// Library Imports
import { useEffect, useState } from 'react';

const useInView = (observedElementSelector: string) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentElement = document.querySelector(observedElementSelector);
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [observedElementSelector]);

    return isInView;
}

export default useInView;
