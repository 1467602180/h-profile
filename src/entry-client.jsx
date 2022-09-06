import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "uno.css";
import "@unocss/reset/tailwind.css";

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
