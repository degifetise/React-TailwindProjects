import "react";
import { CheckCircle } from "lucide-react";
function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      features: ["Basic AI Q&A", "Upload TXT Files", "Community support"],
    },
    {
      id: 2,
      name: "Pro",
      price: "$5",
      features: [
        "Advanced AI Tutoring",
        "Upload PDF & Words",
        "Quiz Generator",
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$13",
      features: ["Unlimited uploads", "Custom Ai models", "Priority support"],
    },
  ];

  return (
    <section id="pricing" className="py-6 bg-slate-950">
      <h2 className="text-4xl font-bold text-center mb-8">
        Feature{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Pricing{" "}
        </span>{" "}
        plan
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {plans.map((plan, i) => (
          <div
            key={i}
            className=" bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-md shadow-lg rounded-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-out"
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2 text-slate-400">
              {plan.price}
            </p>

            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((f, k) => (
                <li key={k} className="flex items-center justify-center gap-2">
                  <CheckCircle className="text-blue-500 w-5 h-5" /> {f}
                </li>
              ))}
            </ul>

            <button className=" text-slate-800 mt-6 block w-full shadow-lg backdrop-blur-lg  bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 px-6 py-3 rounded">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
