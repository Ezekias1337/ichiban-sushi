// Components
import MenuCard from "./menu-card/MenuCard";
import MenuRow from "./menu-row/MenuRow";
// Types
import { MenuCardProps } from "./menu-card/MenuCard";
import { MenuRowProps } from "./menu-row/MenuRow";
// Assets
import SushiImage from "../../../../public/assets/images/items/sushi-1.png";

const OurMenu: React.FC = () => {
  const menuCards: MenuCardProps[] = [
    {
      imgSrc: SushiImage,
      text: "Soup",
    },
    {
      imgSrc: SushiImage,
      text: "Salad",
    },
    {
      imgSrc: SushiImage,
      text: "Appetizer",
    },
    {
      imgSrc: SushiImage,
      text: "Sushi Roll",
    },
    {
      imgSrc: SushiImage,
      text: "Nigiri & Sashimi",
    },
    {
      imgSrc: SushiImage,
      text: "Signature Roll",
    },
  ];

  const menuRows: MenuRowProps[] = [
    {
      title: "Soup",
      description:
        "Warm and comforting traditional Japanese soups, crafted with rich broths and delicate flavors to start your meal right.",
    },
    {
      title: "Salad",
      description:
        "Fresh and vibrant salads featuring crisp greens, seasonal vegetables, and unique Japanese dressings.",
    },
    {
      title: "Appetizer",
      description:
        "Shareable small plates and savory bites — perfect for awakening your palate before the main course.",
    },
    {
      title: "Sushi Roll",
      description:
        "Classic and creative maki rolls, wrapped with premium ingredients and masterfully balanced flavor",
    },
    {
      title: "Nigiri & Sashimi",
      description:
        "Expertly sliced raw fish served as nigiri (with rice) or sashimi (without), showcasing the purity and quality of each cut.",
    },
    {
      title: " Signature Roll",
      description:
        "Ichiban’s house specialties — bold, inventive rolls that blend traditional techniques with modern flair.",
    },
  ];

  return (
    <section className="our-menu padding-left-and-right padding-top-80 padding-bottom-80">
      <h2 className="page-title">Food & Drinks</h2>

      <div className="menu-wrapper full-flex gap-40">
        <div className="menu-items display-grid gap-20">
          {menuCards.map((item, index) => {
            return (
              <MenuCard
                imgSrc={item.imgSrc}
                text={item.text}
                additionalClassNames={
                  index % 2 === 0 ? "margin-top-20" : "margin-bottom-20"
                }
              />
            );
          })}
        </div>
        <div className="menu-rows full-flex flex-direction-column gap-20">
          {menuRows.map((item) => {
            return (
              <MenuRow title={item.title} description={item.description} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
