import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const faviconHref = new URL("./assets/favicon-white.svg", import.meta.url).href;
const existingFavicon =
  document.querySelector<HTMLLinkElement>("link[rel='icon']");

if (existingFavicon) {
  existingFavicon.href = faviconHref;
  existingFavicon.type = "image/svg+xml";
} else {
  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.type = "image/svg+xml";
  faviconLink.href = faviconHref;
  document.head.appendChild(faviconLink);
}

createRoot(document.getElementById("root")!).render(<App />);
