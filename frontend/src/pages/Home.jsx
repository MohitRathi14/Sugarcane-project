import { useState } from "react";
import Layout from "../components/Layout";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import { Sparkles, Shield, Zap } from "lucide-react";

export default function Home() {

  const [result, setResult] = useState(null);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">AI-Powered Disease Detection</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Analyze Your Sugarcane Leaves
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload a photo of your sugarcane leaf and our advanced machine learning model 
          will instantly analyze it for signs of disease.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Analysis</h3>
          <p className="text-gray-600 text-sm">Get results in seconds with our optimized machine learning model</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">High Accuracy</h3>
          <p className="text-gray-600 text-sm">Trained on thousands of samples for reliable disease detection</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
          <p className="text-gray-600 text-sm">Simple drag and drop interface anyone can use</p>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Upload Section */}
        <div className="flex flex-col items-center">
          <UploadForm setResult={setResult} />
        </div>

        {/* Result Section */}
        <div className="flex flex-col items-center">
          <ResultCard result={result} />
          
          {/* Empty State */}
          {!result && (
            <div className="bg-gray-50 rounded-2xl p-8 text-center w-full max-w-md border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No analysis yet</p>
              <p className="text-gray-400 text-sm mt-1">Upload an image to get started</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
