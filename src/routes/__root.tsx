// Library Imports
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Functions, Helpers, Utils, and Hooks


// Consistent Across Pages
import Navbar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
//import CookieBanner from "../components/cookie-banner/CookieBanner";
import ScrollToTop from "../components/general-page-layout/ScrollToTop";

// Constants
const IS_DEV = import.meta.env.VITE_IS_DEV;

const RootComponent = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {IS_DEV === "TRUE" && <TanStackRouterDevtools />}
      <Footer />
      {/* <CookieBanner
        bodyText="To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
        button1={{
          text: "Dismiss",
          variant: "primary-dark",
          buttonSize: "small",
        }}
      /> */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
