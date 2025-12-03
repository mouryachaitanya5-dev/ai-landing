import { renderLanding } from "./pages/landing.js";
import { renderAbout } from "./pages/about.js";
import { renderContact } from "./pages/contact.js";

const routes = {
  "/": renderLanding,
  "/about": renderAbout,
  "/contact": renderContact
};

function navigate() {
  const hash = window.location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");

  const page = routes[hash] || routes["/"];
  page(app);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
