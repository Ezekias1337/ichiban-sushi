// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
//import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/about-us.scss";

const AboutUs = () => (
  <section className="about-us padding-left-and-right dark-image-overlay-500 padding-top-80 padding-bottom-80">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | About Us</title>
      </Helmet>
    </HelmetProvider>

    <PageHeader title="About Us" />

    <div className="about-us-text">
      <p>
        Welcome to Ichiban Sushi – a family-owned sushi restaurant that brings
        authentic Japanese flavors to your table. Founded in 2024 by our owner,
        who hails from Japan, Ichiban Sushi was born out of a deep passion for
        sharing the art of sushi with our local community.
      </p>
      <p className="padding-top-40">
        Our mission is simple: to provide you with an unforgettable dining
        experience by offering high-quality, fresh ingredients and traditional
        Japanese sushi crafted with love and precision. Every roll is made with
        care, ensuring that every bite captures the true essence of Japan’s
        culinary heritage.
      </p>
      <p className="padding-top-40">
        Whether you're enjoying a cozy dinner with loved ones or indulging in a
        sushi feast with friends, we promise to serve you only the finest sushi,
        rolls, and nigiri – with a side of genuine hospitality.
      </p>
    </div>
  </section>
);

export const Route = createLazyFileRoute("/about-us" as never)({
  component: AboutUs,
});
