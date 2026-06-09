export default function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "MSc Informatics Researcher",
      organization: "University of Delhi",
      description:
        "Conducting research in Artificial Intelligence, Public Health Informatics, Disease Surveillance, Data Science, and Intelligent Decision Support Systems.",
    },
    {
      year: "2023 - 2024",
      role: "Lecturer",
      organization: "DMI St. John the Baptist University",
      description:
        "Delivered undergraduate courses in Data Structures, Algorithms, and Object-Oriented Programming. Supervised final-year projects and participated in curriculum development.",
    },
    {
      year: "2022 - 2024",
      role: "ICT Coordinator / System Administrator",
      organization: "DMI St. John the Baptist University",
      description:
        "Managed university information systems, academic databases, digital workflows, student management systems, and technology infrastructure.",
    },
    {
      year: "2021",
      role: "Computer Science Graduate",
      organization: "DMI St. John the Baptist University",
      description:
        "Completed Bachelor of Engineering in Computer Science and began professional work in academia and technology.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Experience
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="
            absolute
            left-5
            top-0
            bottom-0
            w-0.5
            bg-cyan-400/30
            "
          />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="
                  absolute
                  left-0
                  top-2
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                  "
                />

                <div
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                  "
                >
                  <span className="text-cyan-400 text-sm">
                    {exp.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {exp.role}
                  </h3>

                  <p className="text-zinc-400 mt-1 mb-4">
                    {exp.organization}
                  </p>

                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}