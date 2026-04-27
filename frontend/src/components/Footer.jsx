import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-green-100 mt-auto bg-white/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            whileHover={{ color: "#16a34a" }}
            className="text-sm text-gray-500 cursor-default"
          >
            © 2026 Sugarcane Disease. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-6">
            <motion.span 
              whileHover={{ color: "#16a34a" }}
              className="text-sm text-gray-400 cursor-pointer"
            >
              Powered by Deep Learning
            </motion.span>
            <span className="text-sm text-gray-300">•</span>
            <motion.span 
              whileHover={{ color: "#16a34a" }}
              className="text-sm text-gray-400 cursor-pointer"
            >
              React + Tailwind CSS
            </motion.span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
