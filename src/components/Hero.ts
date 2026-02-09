
export function Hero(): string {
  // Placeholder path. User must place 'IMG_STYLE.jpg' in the public/ folder.
  const profileImage = "/IMG_STYLE.jpg";

  return `
    <section class="section theme-light" style="min-height: 90vh; display: flex; align-items: center; overflow: hidden; position: relative;">
      <!-- Foreground Abstract Shapes -->
      <div class="abstract-shape shape-1"></div>
      <div class="abstract-shape shape-2"></div>
      <div class="abstract-shape shape-3"></div>
      <div class="abstract-shape shape-4" style="background: rgba(84, 110, 122, 0.15); width: 150px; height: 150px; top: 20%; right: 40%;"></div>

      <div class="container hero-container" style="position: relative; z-index: 1;">
        
        <div class="hero-content">
          <h1 class="hero-animate delay-100" style="margin-bottom: 1rem;">Hariharan P</h1>
          <h2 class="hero-animate delay-200" style="font-size: 1.75rem; font-weight: 400; color: var(--c-accent); margin-bottom: 1.5rem; text-align: inherit;">
            AI-Focused Computer Science Undergraduate
          </h2>
          <p class="hero-animate delay-300" style="font-size: 1.25rem; max-width: 600px; color: var(--c-text-muted); margin-bottom: 2.5rem;">
            I build intelligent systems using Python, Generative AI, automation, and web technologies, turning ideas into real-world prototypes.
          </p>
          <div class="hero-animate delay-400" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div class="hero-image-wrapper hero-animate delay-200">
          <div class="hero-image-blob"></div>
          <img src="${profileImage}" alt="Hariharan P" class="hero-image" />
        </div>

      </div>
    </section>
  `;
}
