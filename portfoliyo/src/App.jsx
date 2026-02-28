const skills = [
  'MongoDB',
  'Express.js',
  'React + Vite',
  'Node.js',
  'Tailwind CSS',
  'TypeScript',
  'Redux Toolkit',
  'REST & GraphQL',
  'Socket.IO',
  'Docker',
  'AWS & Vercel',
  'CI/CD',
];

const projects = [
  {
    name: 'QuestBoard',
    stack: 'MERN • Socket.IO • Redis',
    description:
      'A team collaboration board with real-time quest tracking, sprint analytics, and role-based permissions for engineering squads.',
    highlight: 'Live collaboration and in-app notifications',
  },
  {
    name: 'ArenaCart',
    stack: 'MongoDB • Express • React • Stripe',
    description:
      'An e-commerce platform with secure checkout, inventory dashboards, and customer segmentation for personalized campaigns.',
    highlight: 'Payments, admin tools, and conversion analytics',
  },
  {
    name: 'GuildHire',
    stack: 'React • Node.js • PostgreSQL • JWT',
    description:
      'A recruitment platform connecting developers and startups through skill-matching, interview scheduling, and portfolio scoring.',
    highlight: 'Authentication, matching algorithm, and reports',
  },
];

const timeline = [
  {
    role: 'Full Stack Web Developer',
    company: 'Freelance / Remote',
    period: '2022 — Present',
    details:
      'Built production-ready MERN applications for startups, improving user engagement, API performance, and release confidence through automated pipelines.',
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Studio Internship',
    period: '2021 — 2022',
    details:
      'Delivered responsive interfaces and reusable component systems, converting Figma designs into optimized React apps with strong accessibility standards.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 bg-grid [background-size:20px_20px]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 lg:px-10">
        <header className="overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-8 shadow-glow lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            MERN Stack Developer
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-100 md:text-6xl">
            Building full stack products with a competitive, game-like edge.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-300 md:text-lg">
            I craft fast, scalable web experiences across MongoDB, Express, React, and Node.js. From UX design systems to API architecture, I ship products that feel immersive and perform like champions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              View Projects
            </button>
            <button className="rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200">
              Contact Me
            </button>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-glow lg:grid-cols-[1.1fr_1fr] lg:p-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-100 md:text-3xl">Skill Loadout</h2>
            <p className="mt-3 text-slate-300">
              My stack focuses on robust backend architecture, polished frontend experiences, and deployment workflows that keep teams shipping quickly.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-center text-sm font-medium text-cyan-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-extrabold text-slate-100 md:text-3xl">Featured Projects</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-glow transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.stack}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-100">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <p className="mt-4 rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200">
                  {project.highlight}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 shadow-glow lg:p-8">
          <h2 className="text-2xl font-extrabold text-slate-100 md:text-3xl">Experience & Impact</h2>
          <div className="mt-6 space-y-4 border-l border-slate-700 pl-5">
            {timeline.map((item) => (
              <div key={item.role} className="relative">
                <span className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{item.period}</p>
                <h3 className="text-lg font-bold text-slate-100">{item.role}</h3>
                <p className="text-sm font-medium text-slate-400">{item.company}</p>
                <p className="mt-2 text-sm text-slate-300">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 p-6 text-center shadow-glow">
          <h2 className="text-2xl font-black text-slate-100">Let’s build your next digital battleground.</h2>
          <p className="mt-3 text-sm text-slate-300">Open to full-time roles, freelance projects, and product collaborations.</p>
          <a
            href="mailto:hello@portfolio.dev"
            className="mt-4 inline-flex rounded-lg bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            hello@portfolio.dev
          </a>
        </footer>
      </div>
    </div>
  );
}
