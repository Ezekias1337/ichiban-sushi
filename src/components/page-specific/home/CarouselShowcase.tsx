// Components
import ImageCarousel from "./image-carousel/ImageCarousel";
// Assets
import EdamameImg from "../../../assets/menu/edamame.png";
import NgiriImg from "../../../assets/menu/ngiri.png";
import SaladImg from "../../../assets/menu/salad.png";
import SignatureRollImg from "../../../assets/menu/signature-roll.png";
import SoupImg from "../../../assets/menu/soup.png";
import SushiRoll from "../../../assets/menu/sushi-roll.png";

const CarouselShowcase: React.FC = () => {
  return (
    <section className="carousel-showcase">
      <ImageCarousel
        imgs={[
          EdamameImg,
          NgiriImg,
          SaladImg,
          SignatureRollImg,
          SoupImg,
          SushiRoll,
        ]}
      />
    </section>
  );
};

export default CarouselShowcase;
