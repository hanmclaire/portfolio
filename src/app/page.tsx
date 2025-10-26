import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";
import { workSamples } from "../data/work-samples";

export default function Home() {
  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section id="home" className="hero section bg-black min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Hi, I&apos;m Claire — a software developer.</h1>
            <p className="text-lg text-gray-300 mb-6">
              I build thoughtful web applications and shipping features that matter. I enjoy working across the
              stack and learning techniques which make apps faster and easier to maintain.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:hanmclaire@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded border border-gray-800 hover:border-gray-700"
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
      <section id="experience" className="section bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">
                Software Engineer
                <span className="text-gray-400 ml-2">@</span>
                <span className="text-white ml-2">Bloomberg</span>
              </h3>
              <p className="text-sm text-gray-400 mb-6">2022 — Present</p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Working on Bloomberg.com. 
                Working closely with stakeholders to design and implement intuitive interfaces
                that handle real-time market data and complex news cycles.
                Focused on performance optimization and building reusable component libraries.
              </p>
            </div>

            {/* Work Samples Carousel */}
            <div className="mt-12">
              <h4 className="text-lg text-gray-400 font-semibold mb-6">Featured Work</h4>
              <Carousel 
                images={workSamples}
                autoPlayInterval={6000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Sample projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                tags={p.tags}
                githubUrl={p.githubUrl}
                demoUrl={p.demoUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
