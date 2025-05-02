// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import Hero from "../components/page-specific/home/Hero";
import FoodDelivery from "../components/page-specific/home/FoodDelivery";
import BarPromo from "../components/page-specific/home/BarPromo";
import Reviews from "../components/page-specific/home/Reviews";
import OurMenu from "../components/page-specific/home/OurMenu";
import CarouselShowcase from "../components/page-specific/home/CarouselShowcase";
// CSS
import "../css/page-specific/home.scss";

const Index = () => (
  <div className="home-page">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | Home</title>
      </Helmet>
    </HelmetProvider>

    <Hero />
    <FoodDelivery />
    <BarPromo />
    <Reviews />
    <OurMenu />
    <CarouselShowcase />
  </div>
);

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});
