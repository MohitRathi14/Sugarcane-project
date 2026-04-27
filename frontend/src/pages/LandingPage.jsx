import { useState } from "react";
import { motion } from "framer-motion";
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
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const stats = [
    { value: "1,000+", label: "Images Trained" },
    { value: "93.33%", label: "Accuracy Rate" },
    { value: "< 10s", label: "Analysis Time" },
    { value: "5+", label: "Diseases Detected" }
  ];

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
      description: "93.3% accuracy trained on 1,000+ sugarcane leaf images",
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

  return (
    <Layout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 border border-green-200/50"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">AI-Powered Disease Detection</span>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                to="/predict"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Leaf className="w-5 h-5" />
                Start Analysis Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section variants={itemVariants} className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-12"
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
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-7 h-7 bg-gradient-to-r ${feature.color} text-white p-1 rounded-xl`} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section variants={itemVariants} className="mb-20">
          <motion.div className="text-center mb-12">
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
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                {index < 2 && <ArrowRight className="w-6 h-6 text-green-400 mx-2 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={itemVariants} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who rely on our AI for early disease detection and higher yields.
            </p>
            <Link
              to="/predict"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-green-600 font-bold rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-1"
            >
              <Leaf className="w-6 h-6" />
              Start Free Analysis
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </Layout>
  );
}
