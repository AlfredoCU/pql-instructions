import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { store } from "@/store";

import "./styles/index.css";
import App from "./containers/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
