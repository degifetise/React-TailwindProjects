import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Play, Sparkle } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");
  const currentFloatingCards = floatingCards[activeTab];
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
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
              <Sparkle className="w-4 h-4 text-blue-400 " />
              <span className="text-xs sm:text-sm text-blue-300">
                Future AI Powered Learning PLatform
              </span>
            </div>

            <div>
              <h1 className="text-5xl xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-900 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Code Faster and Build Better
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Fix Bug and Error Fast
                </span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  With AI Powered Learning Platform...
                </span>
              </h1>

              {/* description of websites */}
              <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700  delay-200 leading-relaxed">
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

          <div className="relative w-full order-2">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20  backdrop-blur-sm rounded-lg overflow-hidden lg:h-[450] sm:h-[350] h-[280px]  border border-white/5 ">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between  px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="flex sm:space-x-2 items-center">
                    <div className="flex space-x-1 sm:space-x-2 items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>

                    <span className="text-xs sm:text-sm text-gray-300">
                      ProgramLearn
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <span className="bg-blue-800/80 p-1 rounded">AI</span>
                    <ChevronDown className="w-3 h-3 rounded-full sm:w-4 sm:h-4" />
                  </div>
                </div>

                <div className="p-3 sm:p-4 relative h-full">
                  <div className="flex space-x-1 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/* Code content we will install libraries like react code syntax highlighter*/}
                  <div className="relative overflow-hidden flex-grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: "0",
                        borderRadius: "8px",
                        lineHeight: ".8",
                        fontSize: "11px",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 translate-x-6 translate-y-6 transform w-72 ${currentFloatingCards.bgColor} backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center flex-col space-x-2 mb-2">
                  <div className="flex flex-col items-center sm:space-x-1 lg:space-x-2">
                    <div
                      className={`w-6 h-6 ${currentFloatingCards.iconColor} flex items-center justify-center text-sm font-bold`}
                    >
                      {currentFloatingCards.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${currentFloatingCards.textColor} `}
                    >
                      {currentFloatingCards.title}
                    </span>
                  </div>
                  <div
                    className={`text-sm font-medium ${currentFloatingCards.contentColor}`}
                  >
                    {currentFloatingCards.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
