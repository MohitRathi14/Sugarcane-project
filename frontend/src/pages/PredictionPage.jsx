import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import Layout from "../components/Layout";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";

export default function PredictionPage() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      <div>
        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* Upload Section */}
            <motion.div className="flex flex-col items-center lg:items-start">
              <UploadForm 
                setResult={setResult} 
                setIsLoading={setIsLoading}
              />
            </motion.div>

            {/* Result Section */}
            <motion.div className="flex flex-col items-center lg:items-start">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full max-w-md"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center border-2 border-dashed border-green-200 shadow-xl">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-spin">
                        <Leaf className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing Your Image...</h3>
                      <p className="text-gray-500 mb-8">Our AI model is processing your sugarcane leaf. This takes about 2-3 seconds.</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                      </div>
                    </div>
                  </motion.div>
                ) : result ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-md"
                  >
                    <ResultCard result={result} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 shadow-xl"
                  >
                    <motion.div
                      variants={floatVariants}
                      initial="initial"
                      animate="animate"
                      className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <Leaf className="w-14 h-14 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for Analysis</h3>
                    <p className="text-gray-600 mb-8">Upload your sugarcane leaf image using the form on the left to begin disease detection.</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-0 animate-pulse" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
