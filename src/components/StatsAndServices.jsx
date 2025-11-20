import React from "react";
import img1 from "../assets/hero.png"; // Losing weight 
/*import img2 from "../assets/service2.png"; // Building muscle
import img3 from "../assets/service3.png"; // Training at home
import img4 from "../assets/service4.png"; // Gym plan */

export default function StatsAndServices() {
  const stats = [
    { value: "96%", label: "Client Satisfaction", desc: "Our Members Love Their Results And Experience" },
    { value: "+5", label: "Years Of Experience", desc: "Trust In Our Proven Track Record Of Transforming" },
    { value: "+800", label: "Active Members", desc: "Join Our Thriving Fitness Community" },
    { value: "24/7", label: "Support Available", desc: "Expert Assistance Whenever You Need It" },
  ];

  const services = [
    {
      title: "LOSING WEIGHT",
      subtitle: "Click To Join Our Losing Weight Plans",
      text: "Achieve Sustainable Weight Loss With Our Customized Programs, Designed To Help You Burn Fat And Build A Healthier, Leaner Body. Start Your Journey To A Fitter You Today.",
      image: img1,
    },
    {
      title: "BUILDING MUSCLE",
      subtitle: "Click To Join Our Building Muscle Plans",
      text: "Develop Strength And Define Your Muscles With Tailored Programs Designed To Help You Gain Lean Mass Efficiently. Click Below And Start Your Journey Right Now!",
      image: img1,
    },
    {
      title: "TRAINING IN HOME",
      subtitle: "Click To See Our Ultimate Home Plans",
      text: "Stay Fit And Strong With Our Effective Home Workout Plans, Requiring Minimal Equipment. You Can Have Access To A Lot Of Plans Just By Clicking Learn More!",
      image: img1,
    },
    {
      title: "GYM PLAN",
      subtitle: "Click, Enter Your Details, Get Your Plan!",
      text: "Maximize Your Gym Sessions With Structured Plans That Guide You Towards Your Fitness Goals.",
      image: img1,
    },
  ];

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center border-b border-gray-700 pb-12">
        {stats.map((s, index) => (
          <div key={index} className="relative">
            <h2 className="text-3xl font-bold text-white-600">{s.value}</h2>
            <p className="font-semibold mt-1">{s.label}</p>
            <p className="text-whites-400 text-sm mt-2">{s.desc}</p>
            {index < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-10 bg-red-700"></span>
            )}
          </div>
        ))}
      </div>

      {/* Services Header */}
      <div className="text-center my-16">
        <h3 className="text-2xl font-bold">
          Our <span className="text-white-600">Services</span>
        </h3>
        <p className="text-white-400 mt-3 max-w-3xl mx-auto">
          At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Choose
          Which Ever You Want.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#0f0f0f] border border-red-900/40 rounded-2xl overflow-hidden group hover:scale-[1.02] transition duration-300"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000080] to-[#000000f0]"></div>

            {/* Content */}
            <div className="relative p-6 flex flex-col justify-end h-full">
              <h4 className="text-xl font-extrabold text-white-600 mb-1">{service.title}</h4>
              <p className="text-sm text-white-300 mb-4">{service.subtitle}</p>
              <p className="text-white-400 text-sm leading-relaxed">{service.text}</p>

              <button className="mt-5 text-white text-sm font-medium flex items-center gap-2 hover:text-red-500 transition">
                Learn More <span className="text-red-600 text-lg">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
