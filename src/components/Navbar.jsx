import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home" },
    { name: "Programs", dropdown: true },
    { name: "Coaching", dropdown: true },
    { name: "Membership" },
    { name: "About Us" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-[#0f0f0f] text-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-red-700 rounded-sm"></div>
        <div className="leading-tight">
          <h1 className="text-lg font-semibold">
            Fit<span className="text-red-500">Maker</span>
          </h1>
          <p className="text-xs text-gray-400">Transform Your Body</p>
        </div>
      </div>

      {/* Search and Nav Links */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <Search className="text-gray-400" size={18} />
        </div>

        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative cursor-pointer"
          >
            <span
              className={`text-sm ${
                active === item.name ? "text-white font-medium" : "text-gray-300"
              }`}
            >
              {item.name}
            </span>
            {item.dropdown && (
              <ChevronDown size={14} className="inline ml-1 text-red-600" />
            )}
            {/* Active underline */}
            {active === item.name && (
              <div className="absolute left-0 right-0 h-[2px] bg-red-600 mt-1 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-3">
        <button className="border border-red-600 text-red-500 px-4 py-1.5 rounded-xl text-sm hover:bg-red-600 hover:text-white transition">
          Login
        </button>
      </div>
    </nav>
  );
}
