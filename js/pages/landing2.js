// js/pages/landing2.js

function renderLanding2(root) {
  root.innerHTML = `
    <section class="gradient-hero">
      <div class="hero-content">
        <h1 class="hero-title">AI Funnels That Close Clients Automatically</h1>
        <p class="hero-subtitle">
          Modern client acquisition system using AI outreach, conversion pages,
          and automated booking pipelines — built for agencies, coaches, and B2B services.
        </p>
        <button class="cta-button hero-btn" onclick="location.hash='#/contact'">
          Book Free Strategy Call
        </button>
      </div>
    </section>

    <section class="feature-section">
      <h2 class="feature-heading">What You Get</h2>
      <div class="feature-grid">

        <div class="feature-card modern-card">
          <h3>Conversion Landing Page</h3>
          <p>High-converting gradient UI with storytelling structure, built Proven SaaS layouts.</p>
        </div>

        <div class="feature-card modern-card">
          <h3>AI Outreach Flows</h3>
          <p>Hyper-personalized LinkedIn and email sequences that get replies and book calls.</p>
        </div>

        <div class="feature-card modern-card">
          <h3>Call Booking Automations</h3>
          <p>Calendar integrations, reminders, nurturing, and deal tracking.</p>
        </div>

      </div>
    </section>
  `;
}

export { renderLanding2 };
