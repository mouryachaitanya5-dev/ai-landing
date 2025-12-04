import { renderLanding } from "./pages/landing.js";
import { renderAbout } from "./pages/about.js";
import { renderContact } from "./pages/contact.js";
import { renderLanding2 } from "./pages/landing2.js"; // <-- add this line


const routes = {
  "/": renderLanding,
  "/about": renderAbout,
  "/contact": renderContact,
  "/v2": renderLanding2, // <-- new route
};

function navigate() {
  const hash = window.location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");

  const page = routes[hash] || routes["/"];
  page(app);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
