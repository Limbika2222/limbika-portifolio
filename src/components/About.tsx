export default function About() {
  const cards = [
    {
      title: "AI Research",
      description:
        "Building intelligent systems using Machine Learning, Data Science, and Public Health Informatics.",
    },
    {
      title: "Software Engineering",
      description:
        "Developing scalable web applications, APIs, and cloud-based systems.",
    },
    {
      title: "University Lecturer",
      description:
        "Delivered courses in Algorithms, Data Structures, and Object-Oriented Programming.",
    },
    {
      title: "System Administration",
      description:
        "Managed university systems, databases, and digital learning infrastructure.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Passionate about building
          intelligent solutions that
          create real-world impact.
        </h2>

        <p className="text-zinc-400 text-lg max-w-4xl mb-16 leading-relaxed">
          I am a Software Engineer, AI Researcher, and Educator
          with a strong background in Artificial Intelligence,
          Public Health Informatics, Full Stack Development,
          and Cloud Computing. My work focuses on creating
          technology-driven solutions for healthcare,
          agriculture, and economic intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-400/50
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-zinc-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}