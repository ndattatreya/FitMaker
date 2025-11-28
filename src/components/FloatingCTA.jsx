import { useState } from "react";
import { Phone, MessageSquare, Linkedin, MessageCircle, Plus } from "lucide-react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
      {open && (
        <>
          <a
            href="tel:+919876543210"
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="Call"
          >
            <Phone size={22} />
          </a>

          <a
            href="mailto:example@gmail.com"
            className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="Email"
          >
            <MessageSquare size={22} />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-110 transition"
            title="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>

          <a
            href="https://linkedin.com/in/example"
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
