import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { Activity, CheckCircle, AlertTriangle, Leaf } from "lucide-react";
import { Card } from "./shared";
import { motion } from "framer-motion";

export default function ResultCard({ result }) {
  const [animatedConfidence, setAnimatedConfidence] = useState(0);

  useEffect(() => {
    if (result) {
      // Animate confidence counter
      const duration = 1500;
      const steps = 60;
      const increment = result.confidence / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= result.confidence) {
          setAnimatedConfidence(result.confidence);
          clearInterval(timer);
        } else {
          setAnimatedConfidence(Math.round(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [result]);

  if (!result) return null;

  const isHealthy = result.status?.toLowerCase() === "healthy";
  
  const data = [
    { name: "Confidence", value: result.confidence },
    { name: "Remaining", value: 100 - result.confidence },
  ];

  const COLORS = [isHealthy ? "#22c55e" : "#ef4444", "#e5e7eb"];

  const StatusIcon = isHealthy ? CheckCircle : AlertTriangle;
  const statusColor = isHealthy ? "text-green-600" : "text-red-600";
  const statusBg = isHealthy ? "bg-green-50" : "bg-red-50";
  const gradientFrom = isHealthy ? "from-green-500" : "from-red-500";
  const gradientTo = isHealthy ? "to-emerald-500" : "to-orange-500";

  return (
    <Card className="w-full max-w-md" icon={Activity} title="Analysis Results">
      {/* Image Preview with Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          src={result.imageUrl}
          alt="Analyzed leaf"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Status Badge on Image */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-3 left-3"
        >
          <div className={`flex items-center gap-2 px-3 py-1.5 ${statusBg} rounded-full backdrop-blur-sm`}>
            <StatusIcon className={`w-4 h-4 ${statusColor}`} />
            <span className={`text-sm font-semibold ${statusColor}`}>
              {result.status}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Status Badge */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className={`flex items-center gap-3 p-4 rounded-2xl ${statusBg} mb-6 border border-current/10`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`p-2 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
        >
          <StatusIcon className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Diagnosis</p>
          <p className={`text-xl font-bold ${statusColor}`}>
            {result.status}
          </p>
        </div>
      </motion.div>

      {/* Disease Info */}
      <div className="space-y-4">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between py-3 border-b border-gray-100"
        >
          <span className="text-gray-600 font-medium">Disease Detected</span>
          <span className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
            {result.disease || "None"}
          </span>
        </motion.div>

        {/* Confidence Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="py-3"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600 font-medium">Confidence Score</span>
            <motion.span 
              key={animatedConfidence}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className={`text-2xl font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
            >
              {animatedConfidence}%
            </motion.span>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${result.confidence}%` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={`absolute left-0 top-0 h-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
            />
            {/* Shimmer Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </div>
          
          {/* Pie Chart */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-48 mt-4"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={index} 
                      fill={COLORS[index]} 
                      strokeWidth={0}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `${value}%`}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>

      {/* Recommendation */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className={`mt-6 p-5 rounded-2xl ${
          isHealthy 
            ? "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200" 
            : "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"
        }`}>
        <div className="flex items-start gap-3">
          {isHealthy ? (
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          )}
          <p className={`text-sm font-medium ${
            isHealthy ? "text-green-700" : "text-amber-700"
          }`}>
            {isHealthy 
              ? "✓ Your sugarcane plant appears healthy! Keep up the good work with regular monitoring and proper maintenance."
              : "⚠ Disease detected. We recommend consulting with an agricultural expert immediately for proper treatment options."
            }
          </p>
        </div>
      </motion.div>

      {/* Treatment Information */}
      {result.treatment && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
        >
          <div className="flex items-start gap-3 mb-4">
            <Leaf className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800">
                Treatment & Recommendations
              </p>
              <p className="text-xs text-blue-600 mt-1">
                {result.treatment.description}
              </p>
            </div>
          </div>
          
          {/* Treatments List */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
              Recommended Treatments:
            </p>
            <ul className="space-y-2">
              {result.treatment.treatments?.map((treatment, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  {treatment}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Prevention Tips */}
          <div>
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
              Prevention Tips:
            </p>
            <ul className="space-y-2">
              {result.treatment.prevention?.map((tip, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 + (index * 0.1) }}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  {tip}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </Card>
  );
}

