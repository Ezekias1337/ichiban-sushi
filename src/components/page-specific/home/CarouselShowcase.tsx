// Components
import ImageCarousel from "./image-carousel/ImageCarousel";
// Assets
import SushiImage from "../../../assets/items/sushi-5.png";
import SushiImage2 from "../../../assets/items/sushi-6.png";
import SushiImage3 from "../../../assets/items/sushi-8.png";


const CarouselShowcase: React.FC = () => {
  return (
    <section className="carousel-showcase">
      <ImageCarousel imgs={[SushiImage, SushiImage2, SushiImage3]} />
    </section>
  );
};

export default CarouselShowcase;
