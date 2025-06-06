import { render } from "react-dom";

import { App } from "./app";
import { Providers } from "./providers";

import "./styles/index.scss";

import "@/shared/model/i18n/i18n";

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
