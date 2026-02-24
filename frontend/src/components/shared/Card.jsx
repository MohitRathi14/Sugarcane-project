import { Leaf } from "lucide-react";

export default function Card({ 
  children, 
  className = "", 
  title,
  icon: Icon = Leaf,
  gradient = false 
}) {
  return (
    <div className={`
      relative overflow-hidden
      bg-white rounded-2xl
      shadow-lg hover:shadow-xl
      border border-gray-100
      transition-all duration-300
      hover:-translate-y-1
      ${gradient ? 'bg-gradient-to-br from-white to-green-50' : ''}
      ${className}
    `}>
      {title && (
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <Icon className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
