import { Leaf } from "lucide-react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Floating Leaves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: -100,
              rotate: 0 
            }}
            animate={{ 
              y: "120vh",
              rotate: 360,
              x: `calc(${Math.random() * 100}% + ${Math.random() * 200 - 100}px)`
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            <Leaf className={`w-${8 + (i % 3) * 4} h-${8 + (i % 3) * 4}`} />
          </motion.div>
        ))}
      </div>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} location={location} />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

