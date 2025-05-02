// Library Imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
} from "@tanstack/react-router";
// CSS
import "./css/styles.scss";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

//404 Page
import PageNotFound from "./routes/page-not-found.lazy";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: PageNotFound,
  history: memoryHistory,
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