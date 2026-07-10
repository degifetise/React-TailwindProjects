import React, { useState } from "react";

export default function TechGrid() {

  const [activeTech, setActiveTech] = useState(null);

  const techStack = [
    {
      name: "React.js",
      icon: "⚛️",
      description:
        "Building highly responsive component frameworks and tracking interactive state lifecycles.",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description:
        "Designing fully fluid responsive layouts with utility classes and structural design tokens.",
    },
    {
      name: "Node.js / Express",
      icon: "🟢",
      description:
        "Developing high-throughput API endpoints, parsing webhooks, and routing gateway traffic.",
    },
    {
      name: "Supabase",
      icon: "⚡",
      description:
        "Implementing multi-tenant Row-Level Security (RLS) data isolation models and handling real-time streams.",
    },
    {
      name: "JavaScript / ES6",
      icon: "💛",
      description:
        "Writing complex algorithm operations, manipulating arrays efficiently, and orchestrating asynchronous tasks.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* The Tech Grid Layer */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setActiveTech(tech)}
            onMouseLeave={() => setActiveTech(null)}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#262626] cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 group"
          >
            <span className="overflow-hidden text-4xl mb-3 transform transition-transform duration-200 group-hover:scale-110">
              {tech.icon}
            </span>
            <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Dynamic Active Description System Tray */}
      <div className="h-16 flex items-center justify-center px-4 rounded-xl bg-slate-100 dark:bg-[#151515] border border-slate-200/60 dark:border-white/5 transition-all duration-300">
        {activeTech ? (
          <p className="text-center text-sm md:text-base text-emerald-600 dark:text-emerald-400 font-mono tracking-wide animate-fade-in">
            🔧{" "}
            <strong className="text-slate-800 dark:text-white mr-1">
              {activeTech.name}:
            </strong>{" "}
            {activeTech.description}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
