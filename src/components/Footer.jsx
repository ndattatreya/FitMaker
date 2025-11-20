import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function FooterSection() {
  return (
    <div className="w-full bg-transparent text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* LEFT BRAND SECTION */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-[#005BBB] rounded-sm"></div>
            <h2 className="text-2xl font-bold">
              Fit<span className="text-[#005BBB]">Maker</span>
            </h2>
          </div>

          <p className="text-gray-300 mt-2 text-sm">Transform Your Body</p>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Transform Your Body with FitMaker, Your Trusted Partner In Fitness.
            With Over <span className="text-[#58B8FF] font-semibold">5 Years</span> of Experience,
            We Offer Expert Coaching, Tailored Workout Plans, and Guidance.
            <br /><br />
            <span className="text-[#58B8FF] cursor-pointer underline">
              Join Our Community
            </span>{" "}
            and start Your Journey Today.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-6">
            <FaFacebookF className="hover:text-[#58B8FF] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#58B8FF] cursor-pointer transition" />
            <FaTwitter className="hover:text-[#58B8FF] cursor-pointer transition" />
            <FaYoutube className="hover:text-[#58B8FF] cursor-pointer transition" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["About Us","Our Services","Careers","Blog","Testimonials","Contact Us"].map(
              (item) => <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Fitness Tools","Workout Videos","Nutrition Guides","FAQ","Success Stories","Membership"].map(
              (item) => <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            )}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Weight Loss","Building Muscles","Home Workout","Gym Plan","Our Plans","Fitness Group"].map(
              (item) => <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><IoLocationOutline size={18}/> Usa - Washington DC</li>
            <li className="flex items-center gap-2"><IoCallOutline size={18}/> 1234-56789</li>
            <li className="flex items-center gap-2"><IoMailOutline size={18}/> Fitmakerinfo@Gmail.Com</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FitMaker. All Rights Reserved.
      </div>
    </div>
  );
}
