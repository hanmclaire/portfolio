import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero section">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Hi, I’m Claire — a software developer.</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I build thoughtful web applications and tools. I focus on clean code,
              good UX, and shipping features that matter. I enjoy working across the
              stack and learning small techniques that make apps faster and easier to maintain.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:hanmclaire@gmail.com"
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded hover:brightness-95 focus:outline-none focus:ring-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4z" />
                  <path d="M0 6.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.383l-7.555 4.533a.5.5 0 0 1-.49 0L0 6.383z" />
                </svg>
                Say hi!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="font-medium">Software Developer — Acme Co.</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Worked on front-end components and performance optimizations. <span className="text-xs text-gray-500">(2022–Present)</span></p>
            </div>

            <div className="timeline-item">
              <h3 className="font-medium">Frontend Engineer — Example Inc.</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Built internal tools and dashboards with React. <span className="text-xs text-gray-500">(2020–2022)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                tags={p.tags}
                url={p.url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
