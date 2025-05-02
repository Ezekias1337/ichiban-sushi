// Library Imports
import { FC } from "react";
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

const DecorativeImage: FC<DecorativeImageProps> = ({
  imgSrc,
  imgAlt,
  position,
}) => {
  return (
    <div className={`decoration-image-container ${position}-decoration`}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default DecorativeImage;
