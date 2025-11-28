import { useState } from "react";
import { Phone, MessageSquare, Linkedin, MessageCircle, Plus } from "lucide-react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
      {open && (
        <>
          <a
            href="tel:8851643372"
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="Call"
          >
            <Phone size={22} />
          </a>

          <a
            href="mailto:cobios.labs@gmail.com"
            className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="Email"
          >
            <MessageSquare size={22} />
          </a>

          <a
            href="https://www.instagram.com/cobios.official?igsh=NXo2Z3d3NW5pZTd2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-pink-600 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="Instagram"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://wa.me/8851643372"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>

          <a
            href="https://www.linkedin.com/company/cobios-labs/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-800 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="p-4 bg-black text-white rounded-full shadow-xl hover:rotate-90 transition"
      >
        <Plus size={24} className={open ? "rotate-45 transition" : ""} />
      </button>
    </div>
  );
}
