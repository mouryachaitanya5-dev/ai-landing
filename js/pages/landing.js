function renderLanding(root) {
  root.innerHTML = `
    <section>
      <div class="section-label">Welcome</div>
      <h2 class="section-title">AI Client Acquisition System</h2>

      <p>
        We help agencies, coaches, and service providers get consistent
        high-ticket clients using AI-powered outreach, landing pages, and automations.
      </p>

      <button class="cta-button" onclick="location.hash='#/contact'">
        Book a call
      </button>
    </section>
  `;
}

export { renderLanding };
