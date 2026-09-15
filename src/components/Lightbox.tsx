import { useEffect } from 'react';
import { X } from 'lucide-react';
import './Lightbox.css';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageTitle?: string;
  children: React.ReactNode;
}

export function Lightbox({ isOpen, onClose, imageTitle, children }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={imageTitle || 'Visualizador de imagem'}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-close" 
          onClick={onClose}
          aria-label="Fechar visualizador"
        >
          <X size={24} />
        </button>
        <div className="lightbox-body">
          {children}
        </div>
        {imageTitle && (
          <div className="lightbox-caption">{imageTitle}</div>
        )}
      </div>
    </div>
  );
}
