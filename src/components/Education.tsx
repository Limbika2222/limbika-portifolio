export default function Education() {
  const education = [
    {
      degree: "MSc Informatics",
      institution: "University of Delhi, India",
      period: "2024 - 2026",
      status: "Current",
      description:
        "ICCR Scholar specializing in Artificial Intelligence, Public Health Informatics, Data Science, and Advanced Computing.",
    },
    {
      degree: "MSc Computer Science",
      institution: "DMI St. Eugene University",
      period: "2022 - 2024",
      status: "Completed",
      description:
        "Focused on software engineering, machine learning, database systems, and advanced computing concepts.",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "DMI St. John the Baptist University",
      period: "2016 - 2021",
      status: "Completed",
      description:
        "Built a strong foundation in computer science, programming, algorithms, networking, and systems design.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Education
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Academic Journey
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-16">
          My academic background combines computer science,
          artificial intelligence, research, and practical
          technology leadership experience.
        </p>

        <div className="grid gap-8">
          {education.map((item) => (
            <div
              key={item.degree}
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mb-2">
                    {item.institution}
                  </p>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <div
                    className="
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    text-cyan-400
                    "
                  >
                    {item.period}
                  </div>

                  <div
                    className="
                    mt-3
                    text-center
                    text-zinc-500
                    text-sm
                    "
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Highlight */}

        <div
          className="
          mt-16
          bg-linear-to-r
          from-cyan-500/10
          to-blue-500/10
          border
          border-cyan-500/20
          rounded-3xl
          p-8
          "
        >
          <p className="text-cyan-400 mb-3">
            Research Publication
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Deep Learning-Based Diabetic Retinopathy
            Screening System
          </h3>

          <p className="text-zinc-400">
            Published by Springer Nature in 2023.
            This research focused on applying deep learning
            techniques to automate diabetic retinopathy
            screening and assist early diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
}