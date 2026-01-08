import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="min-h-[80vh] flex items-center py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-block px-4 py-2 bg-yellow-200 text-yellow-900 rounded-md mb-6 text-sm font-medium">
            HELLO! I AM
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-teal-400 leading-tight mb-4">
            Hammad Sajid
          </h2>

          <p className="text-lg text-slate-700 mb-8">Professional Solution Architect, Web Designer &amp; Developer</p>

          <div className="flex gap-4 items-center">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="https://drive.google.com/uc?export=download&id=1nNfEn2YzNvm7LYcz1h9GYqmnyTIQmRc6" target="_blank" rel="noopener noreferrer" download="Hammad_Sajid_CV.pdf" className="inline-block px-6 py-3 bg-amber-400 text-white rounded-full font-semibold shadow-md transition">
              Download CV
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-md transition">
              Send Message
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="https://www.fiverr.com/your_username" target="_blank" rel="noopener noreferrer" className="ml-6 inline-block px-6 py-3 border border-amber-300 text-amber-600 rounded-full font-semibold shadow-sm transition">
              Hire Me
            </motion.a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[53vw] h-[65vw] max-w-[700px] max-h-[700px] lg:w-[35vw] lg:h-[40vw] lg:max-w-[680px] lg:max-h-[680px]">
            <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E6F6F2" />
                  <stop offset="100%" stopColor="#F7FBFA" />
                </linearGradient>
              </defs>
              <path fill="url(#g)" d="M421.5,318Q392,386,322,413.5Q252,441,189,410Q126,379,94.5,319.5Q63,260,88,200Q113,140,175,108Q237,76,298,90.5Q359,105,404,150Q449,195,421.5,318Z" />
            </svg>

            <img
              src="/portrait.jpg"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover rounded-[32px] drop-shadow-2xl border border-white"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
