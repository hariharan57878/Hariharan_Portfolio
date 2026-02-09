
export function Contact(): string {
  return `
    <section id="contact" class="section theme-light-alt" style="text-align: center; border-top: 1px solid rgba(0,0,0,0.03); position: relative; overflow: hidden;">
      
      <!-- Bottom Background Blob -->
      <div class="abstract-shape shape-2" style="bottom: -10%; left: -5%; opacity: 0.3;"></div>

      <div class="container animate-on-scroll" style="position: relative; z-index: 1;">
        <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Let's Connect</h2>
        <p style="font-size: 1.1rem; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto; color: var(--c-text-muted);">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 3rem;">
          <a href="mailto:hh5171994@gmail.com" class="btn btn-outline" style="border: none; display: flex; align-items: center; gap: 0.5rem; color: var(--c-text-main); font-weight: 600;">
            <span>✉️</span> hh5171994@gmail.com
          </a>
          <a href="https://github.com/hariharan57878" target="_blank" class="btn btn-outline" style="border: none; display: flex; align-items: center; gap: 0.5rem; color: var(--c-text-main); font-weight: 600;">
            <span>🐙</span> GitHub
          </a>
          <a href="https://linkedin.com/in/p-hariharan" target="_blank" class="btn btn-outline" style="border: none; display: flex; align-items: center; gap: 0.5rem; color: var(--c-text-main); font-weight: 600;">
            <span>💼</span> LinkedIn
          </a>
        </div>

        <a href="/resume.pdf" download="Hariharan_P_Resume.pdf" class="btn btn-primary" style="padding: 1rem 2.5rem; font-size: 1.1rem;">
          Download Resume
        </a>
      </div>
    </section>
  `;
}
