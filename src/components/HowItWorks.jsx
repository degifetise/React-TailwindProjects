import "react";
import { Upload, Bot, CheckCircle } from "lucide-react";
function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Upload or Paste",
      desc: "Choose to upload a file (PDF, Word, PPT, TXT) or paste your notes directly.",
    },
    {
      icon: <Bot className="w-10 h-10 text-green-600 mx-auto" />,
      title: "AI Processes",
      desc: "Our AI analyzes your content, summarizes key points, and generates quizzes.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-purple-600 mx-auto" />,
      title: "Get Results",
      desc: "Receive instant answers, summaries, or practice questions tailored to your learning.",
    },
  ];
  return (
    <section id="how-it-works" className="py-16 bg-slate-950">
      <h2 className="text-4xl font-bold text-center mb-10">How It works</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-md shadow-lg rounded-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-out"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
