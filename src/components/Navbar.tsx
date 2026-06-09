export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-cyan-400 font-bold text-2xl">
          {"<"}LZ{" />"}
        </div>

        <nav className="hidden md:flex gap-10 text-zinc-400">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
  Projects
</a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/Limbika2222"
            target="_blank"
            className="text-zinc-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/limbika-zangazanga"
            target="_blank"
            className="text-zinc-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}