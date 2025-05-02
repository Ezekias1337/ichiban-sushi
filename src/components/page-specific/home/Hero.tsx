// Library Imports
import { useEffect, useState, useMemo } from "react";
// Components
import { Button } from "../../button/Button";
// Functions, Helpers, and Utils
import preloadImages from "../../../utils/preloadImages";
// Assets
import BarImg from "../../../assets/backgrounds/bar.png";
import InsideRestaurantImg from "../../../assets/backgrounds/inside-restaurant.png";
import CherryBlossomWallImg from "../../../assets/backgrounds/cherry-blossom-wall.png";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const heroImages = useMemo(
    () => [InsideRestaurantImg, BarImg, CherryBlossomWallImg],
    []
  );

  // Preload images
  useEffect(() => {
    preloadImages(heroImages);
  }, [heroImages]);

  // Delay initial activation to trigger animation
  useEffect(() => {
    const mountTimeout = setTimeout(() => {
      setIsMounted(true);
    }, 50); // Wait for next frame

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearTimeout(mountTimeout);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  return (
    <section className="hero padding-left-and-right padding-top-80 padding-bottom-80 dark-image-overlay-600 display-flex align-items-center">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${
            index === currentIndex && isMounted ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-overlay dark-image-overlay-600"></div>

      <div className="hero-content z-index-1">
        <div className="hero-text">
          <h1 className="padding-bottom-20">Ichiban Sushi & Asian Cuisine</h1>
          <h2 className="padding-bottom-20">All You Can Eat!</h2>
        </div>

        <div className="button-wrapper">
          <Button
            variant="primary-dark"
            text="Order Now"
            url="/order"
            buttonSize="large"
          />
          <Button
            variant="primary-dark"
            text="View Menu"
            url="/order"
            buttonSize="large"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
