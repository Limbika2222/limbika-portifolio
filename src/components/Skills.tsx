import {
  Brain,
  Code2,
  Database,
  Cloud,
  BarChart3,
  GraduationCap,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Computer Vision",
        "Public Health Informatics",
      ],
    },
    {
      icon: Code2,
      title: "Software Development",
      skills: [
        "Python",
        "TypeScript",
        "React",
        "Next.js",
        "Flask",
        "NestJS",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        "MySQL",
        "SQLite",
        "PostgreSQL",
        "Data Warehousing",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "Docker",
        "Azure",
        "AWS",
        "Git",
        "CI/CD",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      skills: [
        "Power BI",
        "Data Visualization",
        "Statistical Analysis",
        "ETL Pipelines",
      ],
    },
    {
      icon: GraduationCap,
      title: "Teaching & Research",
      skills: [
        "Curriculum Design",
        "Research",
        "Technical Writing",
        "Project Supervision",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Skills
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Technologies & Expertise
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-16">
          A combination of software engineering,
          artificial intelligence, cloud technologies,
          research, and teaching experience.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
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
                <Icon
                  size={40}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-2xl font-semibold mb-6">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
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
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}