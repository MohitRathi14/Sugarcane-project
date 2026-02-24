import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { predictDisease } from "../api/predictionApi";
import { Upload, Image as ImageIcon, X, Scan } from "lucide-react";
import { Card, Button, LoadingSpinner } from "./shared";

export default function UploadForm({ setResult }) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selected = acceptedFiles[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setError(null);
  };

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
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 
          cursor-pointer transition-all duration-200
          flex flex-col items-center justify-center gap-3
          ${isDragActive 
            ? "border-green-500 bg-green-50 scale-[1.02]" 
            : "border-gray-300 hover:border-green-400 hover:bg-gray-50"
          }
        `}
      >
        <input {...getInputProps()} />
        
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center
          ${isDragActive ? "bg-green-100" : "bg-gray-100"}
          transition-colors duration-200
        `}>
          {isDragActive ? (
            <ImageIcon className="w-8 h-8 text-green-600" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
        </div>

        <div className="text-center">
          {isDragActive ? (
            <p className="text-green-600 font-medium">Drop your image here</p>
          ) : (
            <>
              <p className="text-gray-700 font-medium">
                Drag & drop your sugarcane leaf image
              </p>
              <p className="text-gray-400 text-sm mt-1">
                or click to browse files
              </p>
            </>
          )}
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Supports: JPG, PNG, WEBP
        </p>
      </div>

      {/* Preview Section */}
      {preview && (
        <div className="mt-6">
          <div className="relative inline-block w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover"
              />
              <button
                onClick={handleClear}
                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* File Info */}
            <div className="mt-3 flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 truncate max-w-50">
                  {file?.name}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {(file?.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <Button
          onClick={handleUpload}
          loading={loading}
          disabled={!file || loading}
          icon={Scan}
          className="flex-1"
        >
          {loading ? "Analyzing..." : "Detect Disease"}
        </Button>
        
        {file && !loading && (
          <Button
            onClick={handleClear}
            variant="secondary"
            className="px-4"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="mt-6">
          <LoadingSpinner text="Analyzing your image..." />
        </div>
      )}
    </Card>
  );
}
