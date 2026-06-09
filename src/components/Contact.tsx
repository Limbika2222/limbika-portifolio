import {
  Mail,
  MapPin,
  Phone,
  Code,
  Briefcase,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Let&apos;s Work Together
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-16">
          I&apos;m always interested in discussing research,
          software development, artificial intelligence,
          academic collaborations, and innovative technology
          projects.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side */}

          <div
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>
                  limbi.zangazanga@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>
                  +265 999 917 773
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>
                  Blantyre, Malawi
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://github.com/Limbika2222"
                target="_blank"
                rel="noopener noreferrer"
                className="
                p-4
                rounded-xl
                bg-cyan-500/10
                hover:bg-cyan-500/20
                transition
                "
              >
                <Code />
              </a>

              <a
                href="https://linkedin.com/in/limbika-zangazanga"
                target="_blank"
                rel="noopener noreferrer"
                className="
                p-4
                rounded-xl
                bg-cyan-500/10
                hover:bg-cyan-500/20
                transition
                "
              >
                <Briefcase />
              </a>
            </div>
          </div>

          {/* Right Side */}

          <div
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold mb-8">
              Quick Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-cyan-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-cyan-400
                "
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                w-full
                bg-black/20
                border
                border-white/10
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-cyan-400
                "
              />

              <button
                type="submit"
                className="
                w-full
                bg-cyan-400
                text-black
                py-4
                rounded-xl
                font-semibold
                hover:scale-[1.02]
                transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}