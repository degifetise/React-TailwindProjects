export const codeExamples = {
  "App.jsx": `
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
`,

  "Hero.jsx": `
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-300 mb-6">
        This is a simple hero section built with React and Tailwind CSS.
      </p>
      <a
        href="/get-started"
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </a>
    </section>
  );
}

export default Hero;
`,

  "Navbar.jsx": `
import React from "react";

function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 font-bold text-white">MyApp</span>
          </a>
          <div className="space-x-4">
            <a href="/home" className="text-white hover:text-gray-300">Home</a>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blur-500/20",
    iconColor: "text-blue-500",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time.",
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "*",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically.",
  },

  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "|&|",
    title: "Smart Search",
    content: "Intelligent code search across your project.",
  },
};
