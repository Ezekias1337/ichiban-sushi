// CSS
import "./menu-row.scss";

export interface MenuRowProps {
  title: string;
  description: string;
}

const MenuRow: React.FC<MenuRowProps> = ({ title, description }) => {
  return (
    <>
      <hr className="menu-row-hr"></hr>
      <div className="menu-row-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default MenuRow;
