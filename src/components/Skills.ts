
export function Skills(): string {
  const skills = [
    {
      title: "Programming",
      items: ["Python", "C", "HTML", "CSS"]
    },
    {
      title: "AI & Automation",
      items: ["Generative AI", "AI Workflow Automation (n8n)", "AI Chatbots & Voice Assistants", "Basic Machine Learning"]
    },
    {
      title: "Tools",
      items: ["FlutterFlow", "Git & GitHub", "Figma", "VS Code"]
    },
    {
      title: "Core CS",
      items: ["Data Structures & Algorithms", "DBMS", "System Thinking"]
    }
  ];

  const skillCards = skills.map((skill, index) => `
    <div class="card animate-on-scroll delay-${(index + 1) * 100}" style="padding: 1.5rem; border-radius: var(--radius-md);">
      <h3 style="margin-bottom: 1.25rem; font-size: 1.1rem; border-bottom: 1px solid var(--c-slate-700); padding-bottom: 0.5rem; display: inline-block;">${skill.title}</h3>
      <ul style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        ${skill.items.map(item => `<li class="tag">${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section id="skills" class="section theme-dark">
      <div class="container">
        <h2 class="animate-on-scroll">Technical Skills</h2>
        <div class="grid-responsive">
          ${skillCards}
        </div>
      </div>
    </section>
  `;
}
