import { useState } from "react";

// Trainer Images
import sam from "../assets/trainers/josh.png";
import michael from "../assets/trainers/josh.png";
import john from "../assets/trainers/josh.png";
import tom from "../assets/trainers/josh.png";

export default function MeetOurTrainers() {
  const trainers = [
    { name: "Sam Cole", role: "Personal Trainer", img: sam },
    { name: "Michael Harris", role: "Personal Trainer", img: michael },
    { name: "John Anderson", role: "Personal Trainer", img: john },
    { name: "Tom Blake", role: "Personal Trainer", img: tom },
  ];

  return (
    <div className="w-full bg-transparent text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold">
          Meet Our <span className="text-[#005BBB]">Trainers</span>
        </h2>

        <p className="text-gray-200 mt-3">
          At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="rounded-xl bg-black/40 backdrop-blur-md 
              border border-[#005BBB]/40 hover:border-[#005BBB] 
              transition shadow-lg hover:shadow-[#005BBB]/40 overflow-hidden"
            >
              {/* Trainer Image */}
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-sm text-gray-400">{trainer.role}</p>

                <button className="mt-3 text-[#58B8FF] text-sm underline hover:text-[#AEE3FF]">
                  Learn More →
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* VIEW ALL Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-2 border border-[#58B8FF] text-[#58B8FF] 
          rounded-full hover:bg-[#58B8FF] hover:text-black transition">
            View All →
          </button>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-end mt-6 gap-4">
          <button className="p-3 bg-black border border-gray-600 rounded-full hover:border-white transition">
            ←
          </button>
          <button className="p-3 bg-[#005BBB] rounded-full hover:bg-[#004C99] transition">
            →
          </button>
        </div>

      </div>
    </div>
  );
}
