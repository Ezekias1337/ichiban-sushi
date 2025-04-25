// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components


// CSS
import "../css/page-specific/home.scss";

const Index = () => (
  <div className="home-page">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | Home</title>
      </Helmet>
    </HelmetProvider>
  </div>
);

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});
