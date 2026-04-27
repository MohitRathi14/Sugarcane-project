import { Leaf, FlaskConical, Menu, X, Home, Leaf as PredictIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isMenuOpen, setIsMenuOpen, location }) {
  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Sugarcane Doctor
                </h1>
                <p className="text-xs text-gray-500 font-medium">AI-Powered Plant Health</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-100"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FlaskConical className="w-4 h-4 text-green-600" />
                </motion.div>
                <span className="text-sm font-medium text-green-700">ML Model v1.0</span>
              </motion.div>

              <div className="flex items-center gap-1">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    location.pathname === '/' 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  <Home className="w-5 h-5 inline mr-1" />
                  Home
                </Link>
                <Link
                  to="/predict"
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    location.pathname === '/predict' 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  <PredictIcon className="w-5 h-5 inline mr-1" />
                  Predict
                </Link>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-green-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl"
                >
                  <FlaskConical className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">ML Model v1.0</span>
                </motion.div>
                <Link
                  to="/"
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === '/' 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5 inline mr-2" />
                  Home
                </Link>
                <Link
                  to="/predict"
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === '/predict' 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PredictIcon className="w-5 h-5 inline mr-2" />
                  Predict
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
