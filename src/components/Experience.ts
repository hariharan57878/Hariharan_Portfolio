
export function Experience(): string {
  const experiences = [
    {
      role: "Python & AI Intern",
      company: "Accent Techno Soft",
      period: "Internship",
      description: [
        "Developed AI-based chatbots using Python to improve user interaction.",
        "Assisted in building automation workflows to streamline repetitive tasks.",
        "Gained experience working with real-world AI systems and debugging processes."
      ]
    },
    {
      role: "Web Development Intern",
      company: "ZRL Soft Tech Solutions",
      period: "Internship",
      description: [
        "Worked with HTML and CSS to build structured web pages.",
        "Used Git for version control and collaborative development.",
        "Learned frontend development workflows and UI best practices."
      ]
    }
  ];

  const expItems = experiences.map((exp, index) => `
    <div class="animate-on-scroll delay-${index * 200}" style="display: flex; gap: 2rem; position: relative;">
      <!-- Circle and Line -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="width: 16px; height: 16px; border-radius: 50%; background: var(--c-accent); z-index: 1;"></div>
        ${index < experiences.length - 1 ? `<div style="width: 2px; background: var(--c-slate-200); flex-grow: 1; margin-top: -5px; margin-bottom: -5px;"></div>` : ''}
      </div>
      
      <div style="padding-bottom: 3rem;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.25rem; color: var(--c-slate-900);">${exp.role}</h3>
        <div style="font-weight: 500; color: var(--c-slate-800); margin-bottom: 0.5rem; font-size: 1.1rem;">${exp.company}</div>
        <div style="font-size: 0.875rem; color: var(--c-slate-500); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">${exp.period}</div>
        <ul style="list-style-type: disc; margin-left: 1rem; color: var(--c-slate-600); line-height: 1.6;">
          ${exp.description.map(d => `<li style="margin-bottom: 0.5rem;">${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
    <section id="experience" class="section theme-light">
      <div class="container">
        <h2 class="animate-on-scroll" style="margin-bottom: 4rem;">Professional Experience</h2>
        <div style="max-width: 800px; margin: 0 auto; padding-left: 1rem;">
          ${expItems}
        </div>
      </div>
    </section>
  `;
}
