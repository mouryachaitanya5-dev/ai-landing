function renderAbout(root) {
  root.innerHTML = `
    <section>
      <div class="section-label">About Us</div>
      <h2 class="section-title">Who we are</h2>

      <p>
        We are a technical team that builds complete AI-powered marketing systems,
        including landing pages, outreach automation, and conversion tracking.
      </p>
    </section>
  `;
}

export { renderAbout };
