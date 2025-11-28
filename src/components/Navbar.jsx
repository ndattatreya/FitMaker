import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import logo from "../assets/logoimage.jpg"; // <-- adjust path if needed

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-[#0f0f0f]/60 backdrop-blur-md text-white shadow-sm">

      {/* Logo Section */}

      <div className="flex items-center space-x-3">

        <img src={logo} alt="FitMaker Logo" className="w-40 h-15 rounded-sm" />

      </div>


      {/* Buttons */}
      <div className="flex space-x-3">
        <a
          href="https://cobios-dashboard.vercel.app/login"
          rel="noopener noreferrer"
        >
          <button className="
            border border-[#3AB8FF] 
            text-[#3AB8FF] 
            px-4 py-1.5 rounded-xl text-sm 
            hover:bg-[#3AB8FF] hover:text-black transition
            ">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}
