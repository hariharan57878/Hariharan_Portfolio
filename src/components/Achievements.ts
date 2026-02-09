
export function Achievements(): string {
  const achievements = [
    {
      title: "Second Place – Internal Hackathon",
      description: "Designed a role-based cohort dashboard with hierarchical access, attendance tracking, and task assignment."
    },
    {
      title: "Secretary – Regex Club",
      description: "Led and coordinated technical activities, supporting peer learning and event execution."
    },
    {
      title: "Event Organizer – Codeathon",
      description: "Planned and executed technical events (Ideathon & Code Debugging), managed participants, and handled evaluations."
    },
    {
      title: "Hackathon Participant – Smart India Hackathon",
      description: "Collaborated in a team environment to solve real-world problems through rapid prototyping."
    },
    {
      title: "Paper Presentations – SREC & Velalar College",
      description: "Presented technical concepts and project ideas at inter-college events."
    },
    {
      title: "National Cadet Corps (NCC) – 2 Years",
      description: "Developed discipline, leadership, and teamwork skills."
    }
  ];

  return `
    <section id="achievements" class="section theme-light-alt">
      <div class="container">
        <h2 class="animate-on-scroll" style="margin-bottom: 3rem;">Achievements & Leadership</h2>
        <div style="display: grid; gap: 1.5rem; max-width: 800px; margin: 0 auto;">
          ${achievements.map((ach, index) => `
            <div class="card animate-on-scroll delay-${(index % 3) * 100}" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-md);">
              <div style="background: var(--c-slate-100); padding: 0.75rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: var(--c-accent); font-size: 1.25rem;">🏆</span>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 600; color: var(--c-slate-900); margin-bottom: 0.5rem; text-align: left;">${ach.title}</h3>
                <p style="font-size: 0.95rem; color: var(--c-slate-600); line-height: 1.5; margin-bottom: 0;">${ach.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
