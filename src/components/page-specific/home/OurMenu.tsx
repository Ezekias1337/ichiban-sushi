// Components
import MenuCard from "./menu-card/MenuCard";
import MenuRow from "./menu-row/MenuRow";
import DecorativeImage from "../../general-page-layout/decorative-image/DecorativeImage";
// Types
import { MenuCardProps } from "./menu-card/MenuCard";
import { MenuRowProps } from "./menu-row/MenuRow";
// Assets
import SoupImage from "../../../assets/menu/soup.png";
import SaladImage from "../../../assets/menu/salad.png";
import AppetizerImage from "../../../assets/menu/edamame.png";
import SushiRollImage from "../../../assets/menu/sushi-roll.png";
import NigiriImage from "../../../assets/menu/ngiri.png";
import SignatureRollImage from "../../../assets/menu/signature-roll.png";

import Teapot from "../../../assets/items/teapot.png";
import SamuraiSword from "../../../assets/items/samurai-sword-2.png";
import BowlOfRice from "../../../assets/items/bowl-of-rice.png";

const OurMenu: React.FC = () => {
  const menuCards: MenuCardProps[] = [
    {
      imgSrc: SoupImage,
      text: "Soups",
    },
    {
      imgSrc: SaladImage,
      text: "Salads",
    },
    {
      imgSrc: AppetizerImage,
      text: "Appetizers",
    },
    {
      imgSrc: SushiRollImage,
      text: "Sushi Rolls",
    },
    {
      imgSrc: NigiriImage,
      text: "Nigiri & Sashimi",
    },
    {
      imgSrc: SignatureRollImage,
      text: "Signature Rolls",
    },
  ];

  const menuRows: MenuRowProps[] = [
    {
      title: "Soups",
      description:
        "Warm and comforting traditional Japanese soups, crafted with rich broths and delicate flavors to start your meal right.",
    },
    {
      title: "Salads",
      description:
        "Fresh and vibrant salads featuring crisp greens, seasonal vegetables, and unique Japanese dressings.",
    },
    {
      title: "Appetizers",
      description:
        "Shareable small plates and savory bites — perfect for awakening your palate before the main course.",
    },
    {
      title: "Sushi Rolls",
      description:
        "Classic and creative maki rolls, wrapped with premium ingredients and masterfully balanced flavor",
    },
    {
      title: "Nigiri & Sashimi",
      description:
        "Expertly sliced raw fish served as nigiri (with rice) or sashimi (without), showcasing the purity and quality of each cut.",
    },
    {
      title: " Signature Rolls",
      description:
        "Ichiban’s house specialties — bold, inventive rolls that blend traditional techniques with modern flair.",
    },
  ];

  return (
    <section className="our-menu padding-left-and-right padding-top-80 padding-bottom-80 position-relative">
      <h2 className="page-title">Food & Drinks</h2>

      <DecorativeImage
        imgSrc={BowlOfRice}
        imgAlt="Bowl of Rice"
        position="top-left"
      />
      <DecorativeImage
        imgSrc={SamuraiSword}
        imgAlt="Handfan"
        position="center-right"
      />
      <DecorativeImage imgSrc={Teapot} imgAlt="Teapot" position="bottom-left" />
      

      <div className="menu-wrapper full-flex gap-40">
        <div className="menu-items display-grid gap-20">
          {menuCards.map((item, index) => {
            return (
              <MenuCard
                key={index}
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
          {menuRows.map((item, index) => {
            return (
              <MenuRow
                key={index}
                title={item.title}
                description={item.description}
                isLast={index === menuRows.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
