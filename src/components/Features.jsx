import "react";
import { Bot, FileUp, HelpCircle, FileText } from "lucide-react";
function Features() {
  const features = [
    {
      id: 1,
      icon: <Bot className="text-blue-500 w-8 h-8 mx-auto" />,
      title: "AI Tutoring",
      desc: "Learn smarter, not harder. Our AI tutor provides instant explanations, step-by-step guidance, and personalized answers to match your learning style. Whether it's complex theory or exam prep, you’ll always have a digital mentor by your side.",
    },

    {
      id: 2,
      icon: <FileUp className="text-green-500 w-8 h-8 mx-auto" />,
      title: "File Upload Analysis",
      desc: "Upload your study materials — PDFs, Word docs, or PowerPoint slides — and let AI instantly summarize chapters, highlight key points, and generate practice questions. Perfect for condensing lecture notes into actionable insights.",
    },
    {
      icon: <FileText className="text-orange-500 w-8 h-8 mx-auto" />,
      title: "Copy-Paste Text",
      desc: "No files? No problem. Paste any text directly into the platform and watch AI transform it into concise summaries, flashcards, or quizzes. Ideal for quick study sessions or refining your own notes.",
    },

    {
      id: 3,
      icon: <HelpCircle className="text-purple-500 w-8 h-8 mx-auto" />,
      title: "Quiz Generator",
      desc: "Turn your notes into interactive learning. AI automatically creates multiple-choice questions, short answers, and practice tests to help you retain knowledge and prepare confidently for exams.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-slate-950">
      <h1 className="text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block sm:mb-10">
        Powerful Features to Boost Your Learning
      </h1>
      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 backdrop-blur-lg shadow-lg rounded-lg p-6 text-center hover:scale-105"
          >
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold mt-4 sm:mt-6">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
