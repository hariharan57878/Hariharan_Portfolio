
export function Header(): string {
  return `
    <header style="position: sticky; top: 0; width: 100%; height: 90px; background: rgba(250, 250, 249, 0.9); backdrop-filter: blur(12px); z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.03);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 100%;">
        <div style="font-weight: 700; font-size: 1.5rem; color: var(--c-text-main); letter-spacing: -0.02em;">Hariharan P.</div>
        <nav>
          <ul style="display: flex; gap: 2.5rem; font-weight: 500; font-size: 0.95rem;">
            <li><a href="#about" style="color: var(--c-text-muted); hover: var(--c-text-main);">About</a></li>
            <li><a href="#projects" style="color: var(--c-text-muted); hover: var(--c-text-main);">Projects</a></li>
            <li><a href="#contact" style="color: var(--c-text-muted); hover: var(--c-text-main);">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
