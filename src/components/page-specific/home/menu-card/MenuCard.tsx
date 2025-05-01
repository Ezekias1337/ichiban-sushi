// CSS
import "./menu-card.scss";

export interface MenuCardProps {
  imgSrc: string;
  text: string;
  additionalClassNames?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  imgSrc,
  text,
  additionalClassNames,
}) => {
  return (
    <div
      className={`menu-card padding-20 ${additionalClassNames ? additionalClassNames : ""}`}
    >
      <h5 className="menu-card-title z-index-2">{text}</h5>
      <img src={imgSrc} alt={text} className="z-index-1" />
      <div className="menu-card-overlay dark-image-overlay-300"></div>
    </div>
  );
};

export default MenuCard;
