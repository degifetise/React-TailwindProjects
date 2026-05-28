import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkle } from "lucide-react";
function Hero() {
  const lists = [
    {
      id: 1,
      name: "Start with React basics",
    },
    {
      id: 2,
      name: "Upload notes for AI summaries",
    },
    {
      id: 3,
      name: "Build projects with feedback",
    },
  ];

  // Example questions array
  const quizQuestions = [
    {
      type: "chooseTwo",
      question: "Which react hooks are commonly used for state management?",
      options: ["useState", "useRef", "useEffect", "useMemo"],
    },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouthMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouthMove);

    return () => {
      window.removeEventListener("mousemove", handleMouthMove);
    };
  }, []);

  return (
    <section className="relative mt-20 min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(50, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl text-center lg:text-left mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          {/* let's add text content of hero */}

          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-sm mb-2 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkle className="w-4 h-4 text-blue-400 animate-scalePulse animate-colorCycle " />
              <span className="text-xs sm:text-sm text-blue-300">
                Future AI Powered Learning PLatform
              </span>
            </div>

            <div>
              <h1 className="text-[clamp(1.75rem,4vw,2rem)] font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-900 leading-tight italic tracking-wide">
                <span className="bg-gradient-to-r opacity-60  drop-shadow-sm from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2 text-[clamp(1.5rem,2.5vw,2.5rem)]">
                  Code Faster and Build Better
                </span>
                <span className="bg-gradient-to-r opacity-60  drop-shadow-sm from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2 text-[clamp(1.5rem,2.5vw,2.5rem)]">
                  Fix Bug and Error Fast
                </span>
                <span className="bg-gradient-to-r opacity-60  drop-shadow-sm from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2 text-[clamp(1.5rem,2.5vw,2.5rem)]">
                  With AI Powered Learning Platform
                </span>
              </h1>

              {/* description of websites */}
              <p className="text-md sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700  delay-200 leading-relaxed">
                Our platform empowers developers to write cleaner code, solve
                bugs faster, and accelerate project delivery. With AI‑powered
                guidance, you’ll gain practical solutions, real‑time error
                fixes, and step‑by‑step learning that helps you build modern,
                responsive applications with confidence. Whether you’re a
                beginner or scaling advanced projects, this is your space to
                code smarter and grow faster.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-900">
                <button className="group hover:scale-105 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-slate-600 to-violet-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-700 hover:scale-102 flex items-center justify-center space-x-2">
                  <span>Start Free</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group hover:scale-105 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-700 hover:bg-white/10 flex items-center justify-center space-x-2">
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                    <Play className="group-hover:translate-x-1 transition-transform fill-white" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Summary Card */}
          {/* AI Quiz Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col  gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-white/10">
              <h3 className="text-pink-500 text-sm font-semibold mb-2 text-center">
                AI Roadmap → Learning Path
              </h3>
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-lg">
                <ol className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {lists.map((list) => (
                    <li>{list.name}</li>
                  ))}
                </ol>
              </div>
              <span className="text-xs bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-3 border-t-2 p-2 text-center block">
                AI Guides Your Journey
              </span>
            </div>
            {/* AI Code Explainer Card */}
            <div className="relative bg-white/5 backdrop-filter-xl rounded-xl p-4 shadow-xl border border-white/10">
              <h3 className="text-purple-400 text-sm font-semibold mb-2 text-center">
                AI Code → Explanation
              </h3>
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-md  rounded-lg p-4 border-white/10 shadow-lg">
                <p className="text-gray-400 text-sm">
                  <code className="text-purple-400">useState</code> initializes
                  state variables and updates them dynamically.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Example:{" "}
                  <code className="text-pink-500">
                    const [count, setCount] = useState(0){" "}
                  </code>
                </p>
              </div>
              <span className="text-xs bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-3 border-t-2 p-2 text-center block">
                AI Explains Code Instantly
              </span>
            </div>
            {/* AI Quiz Card */}

            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-white/10">
              <h3 className="text-green-400 text-sm font-semibold mb-2 text-center">
                AI Quiz → Practice Questions
              </h3>
              <div
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 
                  backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-lg"
              >
                {quizQuestions.map((q, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-slate-400 text-sm mb-2"> {q.question}</p>

                    <ul className="space-y-2 text-sm">
                      {q.options.map((opt, j) => (
                        <li
                          key={j}
                          className="bg-white/10 hover:bg-green-500/30 p-2 rounded cursor-pointer"
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <span className="text-xs bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-3 border-t-2 p-2 text-center block">
                Powered by AI Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
