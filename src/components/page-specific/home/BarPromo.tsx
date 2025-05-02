import SushiImage from "../../../assets/items/sushi-5.png";
import SushiImage2 from "../../../assets/items/sushi-6.png";
import SushiImage3 from "../../../assets/items/sushi-8.png";

const BarPromo: React.FC = () => {
  return (
    <section className="bar-promo padding-left-and-right padding-top-80 padding-bottom-80 display-grid dark-image-overlay-600">
      <div className="bar-promo-text full-flex">
        <h2>
          Sit at the bar during happy hour and enjoy 50% off of appetizers
        </h2>
      </div>
      <div className="alcohol-and-appetizer-image-wrapper full-flex gap-10">
        <img src={SushiImage3} alt="sushi" />
        <img src={SushiImage} alt="sushi" />
        <img src={SushiImage2} alt="sushi" />
      </div>
    </section>
  );
};

export default BarPromo;
