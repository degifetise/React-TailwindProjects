import React from "react";
import TechGrid from "./TechGrid"; // We will build this next!

export default function PortHome() {
  const skills = [
    "react",
    "php",
    "mongoDB",
    "Rert",
    "rzbne",
    "eerez",
    "zeze",
    "errgtrtrtrtrtr",
    "aazhs vazjhé",
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-12">
        {/* Left Side: Professional Hook Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="text-emerald-500">Degife Tise</span>
          </h1>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
            Frontend & Full-Stack Infrastructure Engineer
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Specialized in building high-performance, responsive web
            applications and secure financial system architectures using React,
            Node.js, and Supabase.
          </p>
          <div className="pt-4">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-mono rounded-lg font-semibold shadow-lg transition-all duration-200">
              View Architecture Catalog
            </button>
          </div>
        </div>

        {/* Right Side: Profile Image Container with Modern Border FX */}
        <div className="flex-shrink-0 relative group">
          {/* Decorative glowing background layer */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />

          <img
            src="/assets/dg.jpg"
            alt="Degife Tise Profile"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-[#1C1C1C] shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* Tech Stack Grid Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-center mb-10 text-slate-900 dark:text-white">
          CORE STACK SYSTEM BLUEPRINT
        </h2>
        <TechGrid />
      </section>

      <section>
        <h1>hello</h1>
        <div className="overflow-hidden whitespace-nowrap py-4">
          <div className="animate-marque inline-flex gap-10">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="bg-slate-800 w-80 text-center  mx-auto p-3 rounded-xl shadow-2xl text-lg font-semibold text-gray-300">
                {skill}{" "}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
