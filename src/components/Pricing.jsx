import "react";
import { CheckCircle, Circle, CircleAlertIcon, MoveRight } from "lucide-react";
function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      duration: "30days",
      features: ["Basic AI Q&A", "Upload TXT Files", "Community support"],
    },
    {
      id: 2,
      name: "Pro",
      duration: "6-month",
      price: "$169",
      features: [
        "Advanced AI Tutoring",
        "Upload PDF & Words",
        "Quiz Generator",
      ],
    },

    {
      id: 3,
      name: "Pro",
      duration: "1-year",
      price: "$259",
      features: [
        "Advanced AI Tutoring",
        "Upload PDF & Words",
        "Quiz Generator",
      ],
    },
    {
      id: 4,
      name: "Enterprise",
      price: "$311",
      duration: "1.5-year",
      features: ["Unlimited uploads", "Custom Ai models", "Priority support"],
    },
  ];

  return (
    <section id="pricing" className="py-6 bg-slate-950">
      <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-semibold  sm:mb-6 animate-in slide-in-from-bottom duration-900 leading-tight italic tracking-wide text-center mb-4">
        Feature
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Pricing
        </span>
        plan
      </h2>
      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="mt-2 group relative border-2  border-gray-800 bg-gray-950 backdrop-blur-md shadow-lg rounded-lg p-6 text-center hover:-translate-y-1   transition-transform duration-300 ease-out"
          >

            <div className="flex items-center gap-2 justify-center">
              <h3 className=" text-[clamp(1.2rem,4vw,1.5rem)] font-semibold text-blue-600">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mt-2 text-slate-400">
                {plan.price}
              </p>
              <span className="text-center flex justify-between bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                /{plan.duration}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((f, k) => (
                <li
                  key={k}
                  className="hover:underline flex items-center justify-center gap-2 text-slate-300"
                >
                  <CircleAlertIcon className=" text-blue-500 w-5 h-5" /> {f}
                </li>
              ))}
            </ul>
            <button className="rounded-xl text-white mt-6 block w-full shadow-lg backdrop-blur-lg  bg-blue-900 px-6 py-3 hover:bg-blue-950">
              Subscribe for {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
