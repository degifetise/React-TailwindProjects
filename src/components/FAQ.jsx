import  { useState } from "react";
import {  ChevronDown, ChevronUp } from "lucide-react";
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
              <p className="mt-3 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
