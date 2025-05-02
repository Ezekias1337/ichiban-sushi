// CSS
import "./menu-row.scss";

export interface MenuRowProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const MenuRow: React.FC<MenuRowProps> = ({ title, description, isLast }) => {
  return (
    <>
      <hr className="menu-row-hr"></hr>
      <div className="menu-row-container display-flex justify-content-left flex-direction-column full-width">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      {isLast && <hr className="menu-row-hr"></hr>}
    </>
  );
};

export default MenuRow;
