import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Card({ 
  children, 
  className = "", 
  title,
  icon: Icon = Leaf,
  gradient = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        bg-white rounded-2xl
        shadow-xl hover:shadow-2xl
        border border-gray-100/50
        transition-all duration-300
        ${gradient ? 'bg-gradient-to-br from-white to-green-50' : ''}
        ${className}
      `}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />
      
      {title && (
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100/50 bg-gray-50/30">
          <div className="p-1.5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}

