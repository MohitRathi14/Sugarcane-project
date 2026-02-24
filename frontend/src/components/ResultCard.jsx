import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { Activity, CheckCircle, AlertTriangle } from "lucide-react";
import { Card } from "./shared";

export default function ResultCard({ result }) {

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

  return (
    <Card className="w-full max-w-md" icon={Activity} title="Analysis Results">
      {/* Image Preview */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6">
        <img
          src={result.imageUrl}
          alt="Analyzed leaf"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>

      {/* Status Badge */}
      <div className={`flex items-center gap-3 p-4 rounded-xl ${statusBg} mb-6`}>
        <StatusIcon className={`w-8 h-8 ${statusColor}`} />
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className={`text-xl font-bold ${statusColor}`}>
            {result.status}
          </p>
        </div>
      </div>

      {/* Disease Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-600">Disease Detected</span>
          <span className="font-semibold text-gray-800">
            {result.disease || "None"}
          </span>
        </div>

        {/* Confidence Chart */}
        <div className="py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Confidence</span>
            <span className="font-bold text-green-600">{result.confidence}%</span>
          </div>
          
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${
                isHealthy ? "bg-green-500" : "bg-red-500"
              }`}
              style={{ width: `${result.confidence}%` }}
            ></div>
          </div>
          
          {/* Pie Chart */}
          <div className="h-45 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `${value}%`}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className={`mt-6 p-4 rounded-xl ${
        isHealthy 
          ? "bg-green-50 border border-green-200" 
          : "bg-amber-50 border border-amber-200"
      }`}>
        <p className={`text-sm font-medium ${
          isHealthy ? "text-green-700" : "text-amber-700"
        }`}>
          {isHealthy 
            ? "✓ Your sugarcane plant appears healthy! Continue with regular maintenance."
            : "⚠ Disease detected. Please consult with an agricultural expert for treatment recommendations."
          }
        </p>
      </div>
    </Card>
  );
}
