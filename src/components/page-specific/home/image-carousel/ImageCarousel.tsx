// Library Imports
import { useMemo } from "react";

// CSS
import "./image-carousel.scss";

interface ImageCarouselProps {
  imgs: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imgs }) => {
  const imageArray = useMemo(() => [...imgs, ...imgs, ...imgs, ...imgs], [imgs]);
  
  return (
    <div className="image-carousel-wrapper">
      <div className="image-carousel-container">
        {imageArray.map((image, index) => (
          <img key={index} alt="carousel" src={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
