// Components
import { Button } from "../../button/Button";

const Hero: React.FC = () => {
  return (
    <section className="hero padding-left-and-right padding-top-80 padding-bottom-80 dark-image-overlay-600 display-flex align-items-center">
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
