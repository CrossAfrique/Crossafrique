"use client";
import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface PDFCardProps {
  title: string;
  description?: string;
  pdfUrl: string;
  coverImage?: string;
  index?: number;
}

export default function PDFCard({
  title,
  description,
  pdfUrl,
  coverImage,
  index = 0,
}: PDFCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full"
    >
      {/* Cover Image */}
      {coverImage && (
        <div className="relative h-56">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>

        {description && (
          <div className="flex-1 mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-15">
            {description}
          </p>
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          {/* Preview Button */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition font-medium"
          >
            <Eye className="w-4 h-4" />
            Preview
          </a>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition font-medium"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}