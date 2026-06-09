"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      text-center
      relative
      overflow-hidden
      px-6
      pt-32
      "
    >
      {/* Cyan Glow */}
      <div
        className="
        absolute
        top-40
        left-1/2
        -translate-x-1/2
        w-125
        h-125
        bg-cyan-500/20
        rounded-full
        blur-[150px]
        "
      />

      {/* Purple Glow */}
      <div
        className="
        absolute
        bottom-20
        right-20
        w-75
        h-75
        bg-purple-500/10
        rounded-full
        blur-[120px]
        "
      />

      {/* Profile Image */}
      <div
        className="
        relative
        z-10
        w-40
        h-40
        rounded-full
        border-4
        border-cyan-400
        p-1
        overflow-hidden
        mb-10
        shadow-[0_0_30px_rgba(34,211,238,0.5)]
        "
      >
        <Image
          src="/images/profile.jpg"
          alt="Limbika"
          width={160}
          height={160}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Intro */}
      <p
        className="
        text-cyan-400
        text-lg
        mb-4
        relative
        z-10
        "
      >
        {"// Hello, World! I am Limbika"}
      </p>

      <h1
        className="
        text-5xl
        md:text-7xl
        font-extrabold
        text-white
        relative
        z-10
        "
      >
        Limbika
      </h1>

      {/* Title */}
      <h2
        className="
        text-4xl
        md:text-6xl
        font-bold
        text-cyan-400
        mt-2
        relative
        z-10
        "
      >
        AI Researcher
      </h2>

      {/* Description */}
      <p
        className="
        max-w-3xl
        text-zinc-400
        text-lg
        mt-8
        leading-relaxed
        relative
        z-10
        "
      >
        Building intelligent systems for healthcare,
        agriculture, economic intelligence and public
        health using Artificial Intelligence, Data Science
        and Full Stack Development.
      </p>

      {/* Buttons */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        gap-4
        mt-10
        relative
        z-10
        "
      >
        <a
          href="#contact"
          className="
          bg-cyan-400
          text-black
          px-8
          py-4
          rounded-xl
          font-semibold
          shadow-[0_0_20px_rgba(34,211,238,0.5)]
          hover:scale-105
          transition
          "
        >
          Get In Touch
        </a>

        <a
          href="#"
          className="
          border
          border-zinc-700
          px-8
          py-4
          rounded-xl
          hover:border-cyan-400
          transition
          "
        >
          Download CV
        </a>
      </div>

      {/* Stats */}
      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-5
        mt-20
        relative
        z-10
        "
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5">
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-zinc-500">Masters</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5">
          <h3 className="text-3xl font-bold">1</h3>
          <p className="text-zinc-500">Publication</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5">
          <h3 className="text-3xl font-bold">2+</h3>
          <p className="text-zinc-500">Years Teaching</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5">
          <h3 className="text-3xl font-bold">1000+</h3>
          <p className="text-zinc-500">Students</p>
        </div>
      </div>

      {/* Scroll */}
      <div className="mt-16 text-zinc-500 relative z-10">
        Scroll to explore ↓
      </div>
    </section>
  );
}