import { Leaf, FlaskConical } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-400 via-white to-emerald-400
">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Sugarcane Disease Detection
                </h1>
                <p className="text-xs text-gray-500">AI-Powered Plant Health Analysis</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <FlaskConical className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">ML Model v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-green-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Sugarcane Disease Detection System. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">Powered by Deep Learning</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">React + Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
