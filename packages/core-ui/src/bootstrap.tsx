import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const title = "React + Micro Frontends and Webpack Module Federation";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App title={title} />);
