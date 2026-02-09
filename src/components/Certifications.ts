
export function Certifications(): string {
  const certs = [
    "Databricks – Generative AI & ML Engineering Track",
    "Microsoft Azure – OpenAI Fundamentals",
    "AWS Academy – Generative AI Foundations",
    "Oracle Cloud Infrastructure – AI Foundations Associate",
    "Salesforce – Agentforce Specialist",
    "NPTEL – Programming (Elite Certificate)",
    "IBM Design Thinking – Practitioner & Co-Creator"
  ];

  // Divide into two columns
  const mid = Math.ceil(certs.length / 2);
  const left = certs.slice(0, mid);
  const right = certs.slice(mid);

  const renderList = (list: string[], offset: number) => `
    <ul style="display: flex; flex-direction: column; gap: 1rem;">
      ${list.map((c, index) => `
        <li class="animate-on-scroll delay-${(offset + index) * 100}" style="display: flex; gap: 1rem; align-items: flex-start;">
           <span style="color: var(--c-accent); margin-top: 0.25rem; flex-shrink: 0;">✓</span>
           <span style="color: var(--c-slate-700); font-size: 1rem; font-weight: 500;">${c}</span>
        </li>
      `).join('')}
    </ul>
  `;

  return `
    <section id="certifications" class="section theme-light">
      <div class="container">
        <h2 class="animate-on-scroll" style="margin-bottom: 3rem;">Certifications</h2>
        <div class="certifications-grid">
          ${renderList(left, 0)}
          ${renderList(right, left.length)}
        </div>
      </div>
    </section>
  `;
}
