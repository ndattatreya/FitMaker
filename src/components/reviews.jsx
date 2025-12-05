"use client";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const staticProducts = [
  {
    id: 1,
    name: "Apex Multi-Gym Station",
    category: "Strength Training",
    description: "This multi-gym is the centerpiece of our new facility. The smooth pulley system and ergonomic design have received nothing but praise from members.",
    price: 12990,
    discountPrice: 9990,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
  },
  {
    id: 2,
    name: "Elite Air Runner H507",
    category: "Cardio",
    description: "The quality of the Air Runners is exceptional. They are quiet, durable, and offer a truly challenging workout. A perfect investment for high-traffic areas.",
    price: 3899,
    discountPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
  {
    id: 3,
    name: "Project Installation Service",
    category: "Gym Design & Setup",
    description: "Fit Maker's professional installation team was fast, efficient, and meticulous. They transformed our space exactly as per the 3D digital walk-through. Highly recommend their end-to-end project management.",
    price: 9999,
    discountPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1513709630908-5986d820f7e8?w=800&q=80",
  },
  {
    id: 4,
    name: "Dumbbell & Free Weight Rack",
    category: "Accessories & Storage",
    description: "The custom Fit Maker storage solutions keep our gym floor clean and safe. The quality of the rack steel is very heavy-duty, perfect for commercial use.",
    price: 1599,
    discountPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1b8f?w=800&q=80",
  },
  // --- Additional Reviews Below ---

  {
    id: 5,
    name: "Pro-Series Spin Bikes (Model S7)",
    category: "Cardio",
    description: "These spin bikes are incredibly smooth and stable, even during intense classes. The minimal maintenance required is a huge plus for our operations manager.",
    price: 2499,
    discountPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1577219543168-52260f898c6d?w=800&q=80", // Image of a stationary bike
  },
  {
    id: 6,
    name: "Custom Rubber Flooring (500 sq ft)",
    category: "Facility Upgrades",
    description: "The custom flooring provided excellent sound and impact absorption in our heavy lifting area. The seamless installation greatly improved the overall aesthetic of the facility.",
    price: 5990,
    discountPrice: 4890,
    image:
      "https://images.unsplash.com/photo-1516248386187-57849c71a337?w=800&q=80", // Image of a gym floor
  },
  {
    id: 7,
    name: "Functional Training Rig (Modular)",
    category: "Strength Training",
    description: "Fit Maker designed a modular rig that perfectly utilizes our unique ceiling height. It's versatile, robust, and the members love the variety it offers for functional workouts.",
    price: 8500,
    discountPrice: 6950,
    image:
      "https://images.unsplash.com/photo-1594917950920-569b93220556?w=800&q=80", // Image of a functional training rig
  },
  {
    id: 8,
    name: "Preventative Maintenance Plan (Annual)",
    category: "Support Services",
    description: "Their annual maintenance package is invaluable. It keeps all our high-end machines running perfectly, minimizing downtime and saving us money on unexpected repairs.",
    price: 1999,
    discountPrice: 1500,
    image:
      "https://images.unsplash.com/photo-1587352342083-d56d81432f81?w=800&q=80", // Image related to maintenance/tools
  },
  {
    id: 9,
    name: "Adjustable Bench and Spotter Stand",
    category: "Strength Training",
    description: "The stability and adjustability of the benches are top-tier. They feel very secure and meet all safety standards, which is crucial for our insurance and member comfort.",
    price: 799,
    discountPrice: 649,
    image:
      "https://images.unsplash.com/photo-1552196563-5561a357c32b?w=800&q=80", // Image of a weight bench
  },
];

const StaticCarousel = () => {
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden px-2 md:px-4">
      <h1 className="mt-2 text-center text-3xl font-black tracking-tight text-primary">
        Top Reviews from Our Clients
      </h1>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          480: { slidesPerView: 1.8 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={-150}
        loop={true}
        autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 25,
          depth: 200,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {staticProducts.map((p) => (
          <SwiperSlide key={p.id} className="flex justify-center">
            <div className="group relative h-64 w-44 cursor-pointer overflow-hidden rounded-3xl border shadow-xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 md:h-96 md:w-72">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                <h3 className="text-sm font-bold md:text-lg line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-300 md:text-sm">
                  {p.category}
                </p>
                <p className="hidden text-xs text-gray-200 md:block line-clamp-1">
                  {p.description}
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <p className="text-yellow-400 font-bold text-base md:text-xl">
                      ₹{p.discountPrice}
                    </p>
                    <p className="text-gray-400 line-through text-xs md:text-sm">
                      ₹{p.price}
                    </p>
                  </div>
                  <button className="rounded-md bg-primary px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StaticCarousel;