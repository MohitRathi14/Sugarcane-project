import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md", text = "Loading..." }) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-20 w-20",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className={`${sizes[size]} border-4 border-green-100 border-t-green-600 rounded-full`}
        />
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            size === "sm" ? "h-3 w-3" : size === "md" ? "h-6 w-6" : "h-10 w-10"
          } border-2 border-emerald-100 border-b-emerald-500 rounded-full`}
        />
        {/* Center Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            size === "sm" ? "h-1.5 w-1.5" : size === "md" ? "h-2.5 w-2.5" : "h-4 w-4"
          } bg-gradient-to-r from-green-500 to-emerald-500 rounded-full`}
        />
      </div>
      
      {/* Animated Text */}
      <motion.p 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-gray-600 font-medium text-sm"
      >
        {text}
      </motion.p>
    </div>
  );
}

