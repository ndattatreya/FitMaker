import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What Is FitMaker And How Can It Help Me Reach My Fitness Goals?",
      a: "FitMaker Is An Online Fitness Platform That Offers Personalized Workout Plans, Expert Coaching, And Comprehensive Nutritional Guidance. Whether You’re Looking To Lose Weight, Build Muscle, Or Simply Stay Fit, Our Tailored Programs And Community Support Will Help You Achieve Your Fitness Goals.",
    },
    {
      q: "How Do I Get Started With A Workout Plan On FitMaker?",
      a: "You can get started by choosing a plan, creating an account, and accessing your personalized program instantly.",
    },
    {
      q: "What Is Included In The Custom Plan?",
      a: "The custom plan includes tailored workouts, nutrition guidance, weekly check-ins, and full access to all platform features.",
    },
    {
      q: "Can I Change My Plan After Signing Up?",
      a: "Yes, you can upgrade, downgrade, or switch your plan anytime through your dashboard.",
    },
    {
      q: "What Kind Of Support Can I Expect From My Trainer?",
      a: "Your trainer will provide weekly check-ins, progress tracking, personalized guidance, and direct support for all your fitness needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-transparent text-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-10">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isOpen ? "border-[#005BBB]" : "border-[#005BBB]/50"
                }`}
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5"
                >
                  <span className="text-lg font-semibold">{faq.q}</span>

                  <span
                    className={`text-xl transform transition-transform ${
                      isOpen ? "rotate-180 text-[#005BBB]" : "rotate-0 text-gray-300"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-200 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
