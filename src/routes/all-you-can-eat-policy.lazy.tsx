// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
//import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/all-you-can-eat-policy.scss";

const AllYouCanEatPolicy = () => (
  <section className="all-you-can-eat-policy padding-left-and-right dark-image-overlay-500 padding-top-80 padding-bottom-80">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | All You Can Eat Policy</title>
      </Helmet>
    </HelmetProvider>

    <PageHeader title="All You Can Eat Policy" />

    <div className="all-you-can-eat-policy-explanation">
      <p>
        You must finish your order, including your rice. Any leftovers will be
        charged ($1.00 pc for signature roll and nigiri, $0.50 for regular
        rolls).
      </p>
      <p className="padding-top-40">
        Order as many as you like. Please do not share unless the group of
        guests is all you can eat.
      </p>
    </div>
  </section>
);

export const Route = createLazyFileRoute("/all-you-can-eat-policy" as never)({
  component: AllYouCanEatPolicy,
});
