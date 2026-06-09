export default function Projects() {
  const projects = [
    {
      title: "AI-powered infodemiology Early Warning System",
      category: "AI Disease Surveillance",
      description:
        "An AI-powered infodemiology platform that predicts disease outbreaks using Google Trends, social signals, and public health data.",
      tech: [
        "FastAPI",
        "React",
        "TypeScript",
        "Azure",
        "Docker",
      ],
      color: "cyan",
    },
    {
      title: "KwachaTrack",
      category: "Economic Intelligence Platform",
      description:
        "A macro-to-micro economic intelligence platform tracking inflation, exchange rates, public debt, forex reserves, and purchasing power indicators.",
      tech: [
        "Flask",
        "SQLite",
        "Chart.js",
        "REST API",
      ],
      color: "emerald",
    },
    {
      title: "Mlangizi SmartFarm",
      category: "Agricultural AI",
      description:
        "Decision support platform helping farmers through disease detection, soil monitoring, and AI-driven crop advisory systems.",
      tech: [
        "Python",
        "Machine Learning",
        "Flask",
        "Computer Vision",
      ],
      color: "green",
    },
    {
      title: "Diabetic Retinopathy Screening",
      category: "Healthcare AI",
      description:
        "Deep learning system for automated diabetic retinopathy screening and early diagnosis support.",
      tech: [
        "TensorFlow",
        "Deep Learning",
        "Healthcare AI",
      ],
      color: "purple",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Projects
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Featured Work
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-16">
          A selection of projects spanning artificial
          intelligence, healthcare, agriculture,
          economic intelligence, and software engineering.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-cyan-400/50
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <p className="text-cyan-400 text-sm uppercase tracking-wider mb-3">
                {project.category}
              </p>

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="
                text-cyan-400
                font-medium
                group-hover:translate-x-2
                transition-transform
                "
              >
                View Project →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}