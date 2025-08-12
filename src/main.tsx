import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import route from "./routes";
import { ThemeProvider } from "./providers/themeProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-confirm-alert/src/react-confirm-alert.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={route} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
