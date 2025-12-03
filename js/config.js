// Detect environment (local vs deployed)
const ENV = window.location.hostname === "localhost" ? "development" : "production";

const API_BASE_URL =
  ENV === "development"
    ? "http://localhost:3000"
    : "https://your-production-domain.com";

export { API_BASE_URL, ENV };
