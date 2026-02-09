
export function Footer(): string {
  const year = new Date().getFullYear();
  return `
    <footer class="theme-light" style="border-top: 1px solid var(--c-slate-200); padding: 2rem 0; text-align: center; color: var(--c-slate-400); font-size: 0.875rem;">
      <p>&copy; ${year} Hariharan P. All rights reserved.</p>
    </footer>
  `;
}
