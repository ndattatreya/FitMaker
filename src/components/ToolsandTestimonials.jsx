import { useState } from "react";

import trainerBig from "../assets/trainer1.png";
import trainer1 from "../assets/trainer1.png";
import josh from "../assets/josh.png";
import edward from "../assets/edward.png";

export default function ToolsAndTestimonials() {
  const tools = [
    { title: "CALORIE CALCULATOR" },
    { title: "BMI CALCULATOR" },
    { title: "MACRONUTRIENT CALCULATOR" },
    { title: "GOAL SETTING TOOL" },
    { title: "MACRONUTRIENT CALCULATOR" },
  ];

  const testimonials = [
    {
      name: "Steven Haward",
      role: "Our Trainer",
      text:
        "I’ve Been Using Fitmaker For The Past Three Months, And I’m Genuinely Impressed...",
      img: trainer1,
    },
  ];

  const sideProfiles = [
    { name: "Josh Oliver", img: josh },
    { name: "Edward Harley", img: edward },
  ];

  return (
    <div className="w-full bg-transparent text-white py-20">

      {/* OUR FITNESS TOOLS */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left">
          Our Fitness <span className="text-[#005BBB]">Tools</span>
        </h2>
        <p className="text-gray-200 mt-3">
          Access A Variety Of Tools To Help You Reach Your Fitness Goals
        </p>

        {/* Tool grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-black/40 backdrop-blur-md 
              border border-[#005BBB]/40 hover:border-[#005BBB] 
              transition shadow-lg hover:shadow-[#005BBB]/40"
            >
              <div className="h-20 flex justify-center items-center mb-4">
                <div className="text-[#58B8FF] text-xl">🔧</div>
              </div>

              <h3 className="text-center font-semibold text-lg">{tool.title}</h3>

              <button className="mt-4 text-sm text-[#58B8FF] underline hover:text-[#AEE3FF]">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 mt-24 text-center">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-[#005BBB]">Customers Say</span>
        </h2>
        <p className="text-gray-200 mt-3">
          At This Part You Can See Few Of The Many Positive Reviews.
        </p>

        <div className="relative mt-16 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT IMAGE */}
          <img
            src={trainerBig}
            alt="trainer"
            className="w-64 md:w-80 xl:w-96 rounded-xl"
          />

          {/* Testimonial box */}
          <div className="flex-1 bg-gradient-to-r from-[#005BBB]/50 to-[#58B8FF]/40 
          p-8 rounded-xl shadow-lg backdrop-blur-md 
          border border-[#005BBB]/60 text-left">
            <h3 className="text-xl font-bold">{testimonials[0].name}</h3>
            <p className="text-sm text-gray-200">{testimonials[0].role}</p>

            <p className="mt-4 text-gray-100 leading-relaxed">
              {testimonials[0].text}
            </p>

            <div className="mt-4 text-4xl text-[#AEE3FF] font-bold">“</div>
          </div>

          {/* RIGHT MINI PROFILES */}
          <div className="flex flex-col gap-6">
            {sideProfiles.map((p, i) => (
              <div
                key={i}
                className="bg-black/40 p-4 rounded-xl border border-[#005BBB]/40 
                backdrop-blur-md shadow-lg"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-32 h-40 object-cover rounded-xl"
                />
                <p className="text-center mt-2 font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="p-3 rounded-full bg-black border border-gray-600 hover:border-white transition">
            ←
          </button>
          <button className="p-3 rounded-full bg-[#005BBB] hover:bg-[#004C99] transition">
            → 
          </button>
        </div>
      </section>
    </div>
  );
}
