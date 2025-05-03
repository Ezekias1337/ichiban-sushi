// Hooks
import useInView from "../../../hooks/useInView";
// Assets
import SushiImage from "../../../assets/items/sushi-5.png";
import SushiImage2 from "../../../assets/items/sushi-6.png";
import SushiImage3 from "../../../assets/items/sushi-8.png";

const BarPromo: React.FC = () => {
  const isTextInView = useInView(".food-delivery-text");
  const firstImageInView = useInView(
    ".alcohol-and-appetizer-image-wrapper .appetizer-image:nth-child(1)"
  );
  const secondImageInView = useInView(
    ".alcohol-and-appetizer-image-wrapper .appetizer-image:nth-child(2)"
  );
  const thirdImageInView = useInView(
    ".alcohol-and-appetizer-image-wrapper .appetizer-image:nth-child(3)"
  );

  return (
    <section className="bar-promo padding-left-and-right padding-top-80 padding-bottom-80 display-grid dark-image-overlay-600">
      <div className={`bar-promo-text-wrapper full-flex`}>
        <h2
          className={`bar-promo-text position-relative${isTextInView ? " bar-promo-text-animated" : ""}`}
        >
          Sit at the bar during happy hour and enjoy 50% off of appetizers
        </h2>
      </div>
      <div className="alcohol-and-appetizer-image-wrapper full-flex gap-10">
        <img
          className={`appetizer-image ${firstImageInView ? "appetizer-image-animated" : ""}`}
          src={SushiImage3}
          alt="sushi"
        />
        <img
          className={`appetizer-image ${secondImageInView ? "appetizer-image-animated" : ""}`}
          src={SushiImage}
          alt="sushi"
        />
        <img
          className={`appetizer-image ${thirdImageInView ? "appetizer-image-animated" : ""}`}
          src={SushiImage2}
          alt="sushi"
        />
      </div>
    </section>
  );
};

export default BarPromo;
