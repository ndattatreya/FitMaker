import { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">
          Our <span className="text-white-500">Plans</span>
        </h2>
        <p className="text-white-300 mt-3">
          Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mt-6">
          <div className="flex bg-black/50 border border-blue-500 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "monthly" ? "bg-blue-500" : "bg-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annually")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "annually" ? "bg-blue-500" : "bg-transparent"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <PlanCard
            title="PRO PLAN"
            price={billing === "monthly" ? "99$" : "999$"}
            features={[
              "Access To All Of Our Exercise Videos",
              "Progress Tracking",
              "Supportive Online Community",
              "Advanced, Personalized Workout Plans",
              "Comprehensive Nutrition Coaching",
              "Access To Advanced Workout Programs",
              "Body Composition Analysis",
            ]}
          />

          <PlanCard
            title="CUSTOM PLAN"
            price={billing === "monthly" ? "149$" : "1499$"}
            highlighted
            features={[
              "Access To All Of Our Exercise Videos",
              "Progress Tracking",
              "Supportive Online Community",
              "Fully Customized Workout And Nutrition Plan",
              "Weekly Check-ins With Your Trainer",
              "Access To All Platform Features",
              "Exclusive Gear Discounts",
            ]}
          />

          <PlanCard
            title="BEGINNER PLAN"
            price={billing === "monthly" ? "49$" : "499$"}
            features={[
              "Access To All Of Our Exercise Videos",
              "Progress Tracking",
              "Supportive Online Community",
              "Personalized Workout Plans",
              "Basic Nutrition Guidance",
              "Access To Group Fitness Classes",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, price, features, highlighted }) {
  return (
    <div
      className={`relative border border-red-500 rounded-xl p-8 bg-black/40 backdrop-blur-md shadow-lg transition hover:scale-[1.02] ${
        highlighted ? "shadow-red-500/50 border-2" : ""
      }`}
    >
      <p className="text-white-400 text-sm font-semibold">Package</p>
      <h3 className="text-3xl font-bold mt-1">{title}</h3>
      <p className="text-white-300 mt-3 text-sm leading-relaxed">
        {title === "PRO PLAN" &&
          "Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster."}
        {title === "CUSTOM PLAN" &&
          "Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer."}
        {title === "BEGINNER PLAN" &&
          "Start Your Fitness Journey With Basic Workouts And Essential Nutrition Guidance."}
      </p>

      <h2 className="text-4xl font-bold mt-6">
        {price}
        <span className="text-lg font-normal text-white-400">/USDT</span>
      </h2>

      <ul className="mt-6 space-y-2 text-sm text-white-300">
        {features.map((f, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-white-500">•</span> {f}
          </li>
        ))}
      </ul>

      <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition">
        Choose This Plan
      </button>
    </div>
  );
}
