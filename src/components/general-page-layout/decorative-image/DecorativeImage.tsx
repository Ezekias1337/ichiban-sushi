// Hooks
import useIntersectionAnimation from "../../../hooks/useIntersectionAnimation";
// CSS
import "./decorative-image.scss";

export interface DecorativeImageProps {
  imgSrc: string;
  imgAlt: string;
  position:
    | "top-left"
    | "top-right"
    | "center-left"
    | "center-right"
    | "bottom-left"
    | "bottom-right";
}

const DecorativeImage: React.FC<DecorativeImageProps> = ({
  imgSrc,
  imgAlt,
  position,
}) => {
  const ref = useIntersectionAnimation((el) => {
    el.style.animationName =
      position === "top-left" ||
      position === "top-right" ||
      position === "center-left"
        ? "drop-in"
        : "rise-up";
    el.style.animationPlayState = "running";
  });

  return (
    <div
      ref={ref}
      className={`decoration-image-container ${position}-decoration`}
    >
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default DecorativeImage;
