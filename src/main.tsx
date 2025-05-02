// Library Imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createBrowserHistory,
} from "@tanstack/react-router";
// CSS
import "./css/styles.scss";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

//404 Page
import PageNotFound from "./routes/page-not-found.lazy";

//const URL_BASE = import.meta.env.VITE_ROUTING_URL_BASE;

const browserHistory = createBrowserHistory({
  basepath: "/ichiban-sushi",
});

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: PageNotFound,
  history: browserHistory,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
