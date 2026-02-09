
export function Projects(): string {
  const projects = [
    {
      title: "Personalized AI Learning Roadmap System",
      description: "Designed an AI-driven platform that analyzes user skills, goals, and performance to generate personalized learning roadmaps using AI-based recommendations.",
      tags: ["Python", "Generative AI", "System Design"],
      githubUrl: null,
      demoUrl: null
    },
    {
      title: "AI Workflow Automation System",
      description: "Built automation workflows using n8n to connect APIs and automate repetitive tasks, reducing manual effort and improving efficiency.",
      tags: ["n8n", "Python", "APIs"],
      githubUrl: null,
      demoUrl: null
    },
    {
      title: "ElevenVoice – AI Voice Interaction Platform",
      description: "Developed a speech-to-speech AI assistant using Google Gemini for natural language understanding and ElevenLabs for realistic voice responses.",
      tags: ["Python", "Google Gemini", "ElevenLabs APIs"],
      githubUrl: null,
      demoUrl: null
    },
    {
      title: "Quantum Computing Simulation Platform",
      description: "Worked on a platform enabling quantum circuit simulation with support for deployment to real quantum hardware using IBM Quantum and related APIs.",
      tags: ["Quantum Simulation Tools", "APIs", "System Architecture"],
      githubUrl: null,
      demoUrl: null
    },
    {
      title: "GrocMart Web App",
      description: "Designed a basic grocery delivery web app prototype focusing on user interface and flow.",
      tags: ["HTML", "CSS", "Figma"],
      githubUrl: null,
      demoUrl: null
    }
  ];

  const projectCards = projects.map((project, index) => {
    let actions = "";
    if (project.githubUrl || project.demoUrl) {
      if (project.githubUrl) {
        actions += `<a href="${project.githubUrl}" target="_blank" class="btn btn-outline" style="flex: 1;">View Code</a>`;
      }
      if (project.demoUrl) {
        actions += `<a href="${project.demoUrl}" target="_blank" class="btn btn-primary" style="flex: 1;">Live Demo</a>`;
      }
      actions = `<div style="display: flex; gap: 1rem; width: 100%; margin-top: auto;">${actions}</div>`;
    } else {
      actions = `<div style="font-size: 0.85rem; color: var(--c-slate-400); font-style: italic; text-align: center; padding: 0.75rem 0; background: rgba(255,255,255,0.05); border-radius: var(--radius-sm); width: 100%; margin-top: auto;">Concept & Prototype Project</div>`;
    }

    return `
    <div class="card animate-on-scroll delay-${(index % 3) * 100}" style="padding: 2rem; border-radius: var(--radius-md); display: flex; flex-direction: column; transition: transform 0.2s ease;">
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--c-white);">${project.title}</h3>
      <p style="margin-bottom: 2rem; flex-grow: 1;">${project.description}</p>
      
      <div style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>

      ${actions}
    </div>
  `}).join('');

  return `
    <section id="projects" class="section theme-dark" style="border-top: 1px solid var(--c-slate-800);">
      <div class="container">
        <h2 class="animate-on-scroll">Featured Projects</h2>
        <div class="grid-responsive">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
}
