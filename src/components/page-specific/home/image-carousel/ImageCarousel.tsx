// CSS
import "./image-carousel.scss";

interface ImageCarouselProps {
  imgs: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imgs }) => {
  return (
    <div className="image-carousel-wrapper">
      <div className="image-carousel-container">
        {[...imgs, ...imgs, ...imgs, ...imgs].map((image, index) => (
          <img key={index} alt="carousel" src={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
