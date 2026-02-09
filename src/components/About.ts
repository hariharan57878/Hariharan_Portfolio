
export function About(): string {
  return `
    <section id="about" class="section theme-light-alt" style="position: relative; overflow: hidden;">
      <!-- Subtle Background Blob -->
      <div class="abstract-shape shape-1" style="opacity: 0.3; top: -10%; right: -10%; left: auto;"></div>
      
      <div class="container" style="position: relative; z-index: 1;">
        <div class="about-grid">
          <div class="animate-on-scroll">
            <h2 style="text-align: left; margin-bottom: 2rem;">About Me</h2>
            <p style="margin-bottom: 1.5rem; font-size: 1.1rem; color: var(--c-text-muted);">
              I’m a Computer Science undergraduate who enjoys building systems that solve real problems, not just writing code for assignments. My interest lies in combining AI, automation, and web technologies to create practical, user-focused solutions.
            </p>
            <p style="font-size: 1.1rem; color: var(--c-text-muted);">
              Over time, I’ve worked on projects ranging from AI-powered learning platforms and voice assistants to workflow automation and web applications. Through internships, hackathons, and self-learning, I’ve developed a strong foundation in Python, system design, and prototype development.
            </p>
          </div>
          <div class="animate-on-scroll delay-200" style="background: var(--c-white); padding: 2rem; border-radius: 4px; box-shadow: var(--shadow-sm); border: 1px solid rgba(0,0,0,0.03);">
            <h3 style="margin-bottom: 1.5rem; color: var(--c-text-main); border-bottom: 2px solid var(--c-accent); display: inline-block; padding-bottom: 0.5rem;">Focus Areas</h3>
            <ul style="display: flex; flex-direction: column; gap: 1rem;">
              <li style="display: flex; align-items: center; gap: 0.75rem; font-weight: 500; color: var(--c-text-muted);">
                <span style="color: var(--c-accent);">✦</span> AI Systems
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; font-weight: 500; color: var(--c-text-muted);">
                <span style="color: var(--c-accent);">✦</span> Automation
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; font-weight: 500; color: var(--c-text-muted);">
                <span style="color: var(--c-accent);">✦</span> Web Development
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; font-weight: 500; color: var(--c-text-muted);">
                <span style="color: var(--c-accent);">✦</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
