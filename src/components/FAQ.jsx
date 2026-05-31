import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
function FAQ() {
  const faqs = [
    {
      question: "Is my data safe?",
      answer:
        "Yes, your files and text are processed securely. We never store personal data permanently.",
    },
    {
      question: "Which file formats are supported?",
      answer:
        "You can upload PDF, Word (.doc/.docx), PowerPoint (.ppt/.pptx), and TXT files.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time without hidden fees.",
    },
    {
      question: "Do I need coding skills to use the platform?",
      answer:
        "No coding experience is required. The platform is designed to be user‑friendly for all learners.",
    },
    {
      question: "Can I access the platform on mobile?",
      answer:
        "Yes, the platform is fully responsive and works on desktops, tablets, and smartphones.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a free trial so you can explore features before subscribing.",
    },
    {
      question: "How does the AI generate quizzes?",
      answer:
        "The AI analyzes your uploaded content or notes, identifies key concepts, and creates multiple‑choice questions to help you practice.",
    },
    {
      question: "Can I share my results with others?",
      answer:
        "Yes, you can export summaries, quizzes, and progress reports to share with classmates or colleagues.",
    },
    {
      question: "What languages are supported?",
      answer:
        "Currently, we support English, but additional language support is being added regularly.",
    },
    {
      question: "Does the AI work offline?",
      answer:
        "Some features like saved notes and quizzes can be accessed offline, but real‑time AI guidance requires an internet connection.",
    },
  ];

  const [openIndex, setIsOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 bg-slate-950">
      <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-center mb-10">
        Frequently{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Asked Questions
        </span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b-sky-200 rounded-sm shadow-sm p-4 cursor-pointer"
            onClick={() => setIsOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </div>
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-700" />
              )}
            </div>

            {openIndex === i && (
              <p className="mt-3 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
