import SushiImage from "../../../../public/assets/images/items/sushi-5.png";
import SushiImage2 from "../../../../public/assets/images/items/sushi-6.png";
import SushiImage3 from "../../../../public/assets/images/items/sushi-8.png";
//import AlcoholImage from "../../../assets/images/alcohol.jpg";

const BarPromo: React.FC = () => {
  return (
    <section className="bar-promo padding-left-and-right padding-top-80 padding-bottom-80 display-grid dark-image-overlay-600">
      <div className="bar-promo-text full-flex">
        <h2>
          Sit at the bar during happy hour and enjoy 50% off of appetizers
        </h2>
      </div>
      <div className="alcohol-and-appetizer-image-wrapper full-flex gap-10">
        <img src={SushiImage3} />
        <img src={SushiImage} />
        <img src={SushiImage2} />
      </div>
    </section>
  );
};

export default BarPromo;
