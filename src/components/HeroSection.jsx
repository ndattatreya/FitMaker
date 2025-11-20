import React from "react";
import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 text-white overflow-hidden">

      {/* Left Content */}
      <div className="flex-1 space-y-6 md:pr-10 z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Achieve Your <br />
          <span className="text-[#005BBB] font-extrabold">FITNESS GOALS</span> <br />
          With FitMaker
        </h1>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl">
          "Join The Fitmaker Community And Transform Your Fitness Journey..."
        </p>

        <div className="flex gap-4 pt-4">
          {/* Primary Button */}
          <button className="bg-[#005BBB] hover:bg-[#004C99] px-6 py-2.5 rounded-full text-white font-medium transition">
            Start Your Journey
          </button>

          {/* Outline Button */}
          <button className="border border-[#005BBB] text-[#005BBB] px-6 py-2.5 rounded-full hover:bg-[#005BBB] hover:text-white transition">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0">
        <img
          src={heroImage}
          alt="Hero Athlete"
          className="relative z-10 w-[330px] md:w-[420px] rounded-lg object-cover"
        />

        {/* Floating Stats */}
        <div className="absolute top-8 left-8 bg-black/80 border border-[#005BBB] rounded-xl px-4 py-2 text-center">
          <p className="text-lg font-semibold">+ 80</p>
          <p className="text-xs text-gray-300">Coaches</p>
        </div>

        <div className="absolute bottom-8 left-0 bg-black/80 border border-[#005BBB] rounded-xl px-4 py-2 text-center">
          <p className="text-lg font-semibold">+ 1000</p>
          <p className="text-xs text-gray-300">Workout Videos</p>
        </div>

        <div className="absolute bottom-8 right-0 bg-black/80 border border-[#005BBB] rounded-xl px-4 py-2 text-center">
          <p className="text-lg font-semibold">+ 1500</p>
          <p className="text-xs text-gray-300">Trainers</p>
        </div>

        <div className="absolute top-16 right-10 bg-black/80 border border-[#005BBB] rounded-xl px-4 py-2 text-center">
          <p className="text-lg font-semibold">+ 1300</p>
          <p className="text-xs text-gray-300">Positive Reviews</p>
        </div>
      </div>
    </section>
  );
}
