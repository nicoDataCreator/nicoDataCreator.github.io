import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 shadow-2xl max-h-[75vh] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title || "Project Asset Preview"}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
          />
        </div>

        {(title || caption) && (
          <div className="mt-4 text-center max-w-2xl px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-lg text-slate-200 shadow-lg">
            {title && <h4 className="font-semibold text-white text-base">{title}</h4>}
            {caption && <p className="text-xs text-slate-400 mt-1 leading-relaxed">{caption}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
