import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./componets/Home.jsx";
import Text from "./componets/Text.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Text />
  </StrictMode>
);
