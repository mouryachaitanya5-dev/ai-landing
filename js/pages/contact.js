function renderContact(root) {
  root.innerHTML = `
    <section>
      <div class="section-label">Contact</div>
      <h2 class="section-title">Get in touch</h2>

      <form onsubmit="event.preventDefault()">
        <input type="text" placeholder="Your name" /><br/><br/>
        <input type="email" placeholder="Email" /><br/><br/>
        <textarea placeholder="Your message"></textarea><br/><br/>
        <button class="cta-button">Submit (UI only)</button>
      </form>
    </section>
  `;
}

export { renderContact };
