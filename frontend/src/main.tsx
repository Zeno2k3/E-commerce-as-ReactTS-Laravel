import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/constants/theme.ts";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/index.ts";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
