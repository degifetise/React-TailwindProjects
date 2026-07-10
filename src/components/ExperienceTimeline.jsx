import "react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      number: 1,
      role: "Frontend Developer",
      company: "Freelance / Open Source",
      duration: "2025 - Present",
      description:
        "Building responsive web applications using React.js, Tailwind CSS, and JavaScript. Optimizing UI/UX for performance and managing global state configurations.",
    },
    {
      number: 2,
      role: "Full-Stack Developer Engine",
      company: "AfriPay Auth Project",
      duration: "3-Week Sprint",
      description:
        "Architected secure financial infrastructure using Node.js, Express, and Supabase. Implemented multi-tenant Row-Level Security (RLS) and real-time webhook listeners.",
    },
    {
      number: 3,
      role: "Information Technology Specialist",
      company: "Academic Portfolios",
      duration: "2024 - 2025",
      description:
        "Developed Java Servlet architectures for advanced web programs and handled complex relational database design schemas.",
    },
    {
      number: 4,
      role: "Frontend Developer",
      company: "Freelance / Open Source",
      duration: "2025 - Present",
      description:
        "Building responsive web applications using React.js, Tailwind CSS, and JavaScript. Optimizing UI/UX for performance and managing global state configurations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-20 px-4 text-white overflow-hidden">
      {/* Injecting the custom keyframe animation directly inside a style tag */}
      <style>{`
        @keyframes pulseTravel {
          0% {
            stroke-dashoffset: 280;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-pulse-line {
          /* Adjust the 6s duration to speed up or slow down the pulse */
          animation: pulseTravel 6s linear infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono tracking-wider overflow-hidden">
          ENGINEERING EXPERIENCE
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* 
            ANIMATED CENTER LINE LAYER 
            Hidden on mobile, displays perfectly aligned behind numbers on desktop.
          */}
          <div className="hidden md:block absolute left-1/2 top-6 h-[calc(100%-80px)] w-[4px] -translate-x-1/2 z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Background static dotted track line */}

              <line
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                className="stroke-white/20"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              {/* Active moving pulse line */}

              <line
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                className="stroke-emerald-400 animate-pulse-line"
                strokeWidth="3"
              
                strokeDasharray="30 50"
              />
            </svg>
          </div>

          {/* Experience Rows */}
          <div className="space-y-12 md:space-y-0 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.number}
                  className={`flex flex-col md:flex-row items-center w-full md:mb-16 last:mb-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left/Right Content Block */}
                  <div
                    className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"}`}
                  >
                    <div className="group">
                      <div className="bg-[#262626] p-6 rounded-xl border border-white/10 w-full md:max-w-md shadow-xl transition-all duration-300 hover:border-emerald-500/30">
                        <span className="text-sm text-gray-400 font-mono">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-white">
                          {exp.role}
                        </h3>
                        <h4 className="text-md text-emerald-400 font-medium mb-3">
                          {exp.company}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      <div className="bg-[rgba(0,0,0,0.1)] p-2 w absolute top-6 left-1 group-hover:block">
                     
                        <div className="overflow-hidden">
                          number: 4, role: "Frontend Developer", company:
                          "Freelance / Open Source", duration: "2025 - Present",
                          description:
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Number Circle Pin */}
                  <div className="my-4 md:my-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#1C1C1C] font-mono text-xl font-semibold text-white shadow-md relative z-10">
                    {exp.number}
                  </div>

                  {/* Empty Spacer Block to balance the grid system on desktop */}
                  <div className="hidden md:block w-12 md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
