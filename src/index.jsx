import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from "./App";
import "./index.css";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CacheProvider value={cacheRtl}>
      <App />
    </CacheProvider>
  </Provider>
);
