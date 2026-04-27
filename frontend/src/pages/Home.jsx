import { useState } from "react";
import Layout from "../components/Layout";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Leaf, 
  ArrowRight, 
  CheckCircle2,
  Microscope,
  TrendingUp,
  Heart
} from "lucide-react";

export default function Home() {
  const [result, setResult] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

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

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 0.2, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get results in seconds with our optimized deep learning model",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-100"
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "98.5% accuracy trained on 10,000+ sugarcane leaf images",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Microscope,
      title: "Disease Identification",
      description: "Detect 5 different diseases including Red Rot, Smut, and Rust",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: TrendingUp,
      title: "Treatment Advice",
      description: "Get actionable recommendations for disease management",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-100"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Images Trained" },
    { value: "98.5%", label: "Accuracy Rate" },
    { value: "< 3s", label: "Analysis Time" },
    { value: "5+", label: "Diseases Detected" }
  ];

  return (
    <Layout>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 border border-green-200/50"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">AI-Powered Disease Detection</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Protect Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Sugarcane
            </span>
            {' '}Crops
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Upload a photo of your sugarcane leaf and our advanced AI will instantly 
            analyze it for signs of disease, providing you with accurate results and treatment recommendations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg"
            >
              <Leaf className="w-5 h-5" />
              Start Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-green-300 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Advanced machine learning meets agricultural expertise to protect your crops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-7 h-7 bg-gradient-to-r ${feature.color} text-white p-1 rounded-xl`} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three simple steps to get disease analysis
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { step: "01", title: "Upload Image", desc: "Take a photo of your sugarcane leaf" },
              { step: "02", title: "AI Analysis", desc: "Our model analyzes the image" },
              { step: "03", title: "Get Results", desc: "Receive instant diagnosis & treatment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </motion.div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="w-6 h-6 text-green-400 mx-2 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <UploadForm setResult={setResult} />
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ResultCard result={result} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center w-full max-w-md border-2 border-dashed border-gray-200"
                >
                  <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Leaf className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <p className="text-gray-700 font-semibold text-lg mb-2">
                    Ready to Analyze
                  </p>
                  <p className="text-gray-400 text-sm">
                    Upload a sugarcane leaf image to detect diseases
                  </p>
                  
                  {/* Animated dots */}
                  <div className="flex items-center justify-center gap-1 mt-4">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-green-200" />
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Farmers Worldwide
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-6">
              Join thousands of farmers who have improved their crop yields with early disease detection
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Early Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Save Crops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Increase Yield</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

