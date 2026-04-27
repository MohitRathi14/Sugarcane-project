import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { predictDisease } from "../api/predictionApi";
import { Upload, Image as ImageIcon, X, Scan, FileCheck } from "lucide-react";
import { Card, Button, LoadingSpinner } from "./shared";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadForm({ setResult }) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const selected = acceptedFiles[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const res = await predictDisease(file);
      setResult(res);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    setResult(null);
  };

  return (
    <Card className="w-full max-w-md" icon={Upload} title="Upload Image">
      {/* Dropzone */}
      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`
          relative border-2 border-dashed rounded-2xl p-8 
          cursor-pointer transition-all duration-300
          flex flex-col items-center justify-center gap-3
          ${
            isDragActive 
              ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100" 
              : "border-gray-200 hover:border-green-300 hover:bg-gray-50/50"
          }
        `}
      >
        <input {...getInputProps()} />
        
        <motion.div
          animate={{
            scale: isDragActive ? 1.1 : 1,
            rotate: isDragActive ? 5 : 0,
          }}
          className={`
            w-20 h-20 rounded-2xl flex items-center justify-center
            transition-all duration-300
            ${isDragActive 
              ? "bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-200" 
              : "bg-gradient-to-br from-gray-100 to-gray-200"
            }
          `}
        >
          {isDragActive ? (
            <FileCheck className="w-10 h-10 text-white" />
          ) : (
            <Upload className="w-10 h-10 text-gray-400" />
          )}
        </motion.div>

        <div className="text-center">
          {isDragActive ? (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 font-semibold text-lg"
            >
              Release to upload
            </motion.p>
          ) : (
            <>
              <p className="text-gray-700 font-semibold text-lg">
                Drag & drop your leaf image
              </p>
              <p className="text-gray-400 text-sm mt-1">
                or click to browse files
              </p>
            </>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mt-2"
        >
          <span className="text-xs text-gray-400 px-3 py-1 bg-gray-100 rounded-full">
            JPG
          </span>
          <span className="text-xs text-gray-400 px-3 py-1 bg-gray-100 rounded-full">
            PNG
          </span>
          <span className="text-xs text-gray-400 px-3 py-1 bg-gray-100 rounded-full">
            WEBP
          </span>
        </motion.div>
      </motion.div>

      {/* Preview Section */}
      <AnimatePresence mode="wait">
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={preview}
                  alt="Preview"
                  className="w-full h-52 object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClear}
                  className="absolute top-3 right-3 p-2.5 bg-red-500/90 text-white rounded-full hover:bg-red-600 transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>
              
              {/* File Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ImageIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate max-w-48">
                      {file?.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {(file?.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <FileCheck className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex gap-3"
      >
        <motion.button
          whileHover={!loading && file ? { scale: 1.02, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" } : {}}
          whileTap={!loading && file ? { scale: 0.98 } : {}}
          onClick={handleUpload}
          disabled={!file || loading}
          className={`
            flex-1 flex items-center justify-center gap-2
            px-6 py-4 rounded-2xl font-semibold
            transition-all duration-300
            ${!file || loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl"
            }
          `}
        >
          {loading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Scan className="w-5 h-5" />
              <span>Detect Disease</span>
            </>
          )}
        </motion.button>
        
        {file && !loading && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClear}
            className="px-5 py-4 bg-gray-100 text-gray-600 font-medium rounded-2xl hover:bg-gray-200 transition-colors"
          >
            Clear
          </motion.button>
        )}
      </motion.div>

      {/* Loading State */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6"
          >
            <LoadingSpinner text="Our AI is analyzing your leaf image..." />
            
            {/* Progress Steps */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {["Uploading", "Analyzing", "Detecting"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      backgroundColor: ["#9ca3af", "#22c55e", "#9ca3af"]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.5 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <span className="text-xs text-gray-500 font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

