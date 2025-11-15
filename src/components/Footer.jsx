import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function FooterSection() {
  return (
    <div className="w-full bg-[#0b0b0b] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* LEFT BRAND SECTION */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-red-600 rounded-sm"></div>
            <h2 className="text-2xl font-bold">
              Fit<span className="text-red-500">Maker</span>
            </h2>
          </div>

          <p className="text-gray-300 mt-2 text-sm">Transform Your Body</p>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Transform Your Body with FitMaker, Your Trusted Partner In Fitness.
            With Over <span className="text-red-500 font-semibold">5 Years</span> of Experience,
            We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive
            Nutritional Guidance.
            <br /><br />
            <span className="text-red-400 cursor-pointer underline">
              Join Our Community
            </span>{" "}
            and start Your Journey Towards a Healthier, Stronger You.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-6">
            <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Services</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Fitness Tools</li>
            <li className="hover:text-white cursor-pointer">Workout Videos</li>
            <li className="hover:text-white cursor-pointer">Nutrition Guides</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
            <li className="hover:text-white cursor-pointer">Membership</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Weight Loss</li>
            <li className="hover:text-white cursor-pointer">Building Muscles</li>
            <li className="hover:text-white cursor-pointer">Home Workout</li>
            <li className="hover:text-white cursor-pointer">Gym Plan</li>
            <li className="hover:text-white cursor-pointer">Our Plans</li>
            <li className="hover:text-white cursor-pointer">Fitness Group</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <IoLocationOutline size={18} /> Usa - Washington DC
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline size={18} /> 1234-56789
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline size={18} /> Fitmakerinfo@Gmail.Com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitMaker. All Rights Reserved.
      </div>
    </div>
  );
}
