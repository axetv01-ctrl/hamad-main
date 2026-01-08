import React from "react";
import { motion } from "framer-motion";

// Use the provided number: 0332 1588393 -> convert to international format (Pakistan +92)
// Final wa.me number: 923321588393
const WIDGET_PHONE = "923321588393";

export default function WhatsAppWidget() {
  const phone = WIDGET_PHONE;
  const message = encodeURIComponent("Hello! I'm interested in your services.");

  const openChat = () => {
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <motion.button
        onClick={openChat}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-xl"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.37 0 .01 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.22-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52z" fill="#25D366"/>
          <path d="M17.18 14.08c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15s-.77.95-.94 1.14c-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.41-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2 0-.37-.05-.52-.05-.15-.67-1.61-.92-2.21-.24-.59-.48-.51-.67-.52l-.57-.01c-.19 0-.5.07-.77.37s-1.01.99-1.01 2.42 1.04 2.8 1.18 3s2.05 3.13 4.97 4.39c.69.3 1.23.48 1.65.62.69.23 1.32.2 1.82.12.55-.09 1.72-.7 1.97-1.38.25-.68.25-1.26.18-1.38-.07-.11-.27-.17-.56-.32z" fill="#fff"/>
        </svg>

        {/* icon only - no text */}
      </motion.button>
    </div>
  );
}
