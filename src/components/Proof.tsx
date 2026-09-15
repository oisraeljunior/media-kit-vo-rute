import { useState } from 'react';
import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import { Lightbox } from './Lightbox';
import { ZoomIn } from 'lucide-react';
import './Proof.css';

export function Proof() {
  const { proof } = mediaKitData;
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveScreenshot(index);
  };

  const handleCloseLightbox = () => {
    setActiveScreenshot(null);
  };

  // We only use the first 3 for the editorial layout
  const displayScreenshots = proof.screenshots.slice(0, 3);

  return (
    <section className="proof-section">
      <div className="container">
        <FadeIn>
          <div className="proof-header">
            <h2 className="proof-headline">{proof.headline}</h2>
            <p className="proof-source">{proof.source}</p>
          </div>
        </FadeIn>

        <div className="proof-grid">
          {displayScreenshots.map((item, index) => (
            <FadeIn 
              key={item.id} 
              delay={index * 150} 
              className={`proof-item ${index === 0 ? 'featured' : ''}`}
            >
              <button 
                className="proof-image-btn"
                onClick={() => handleOpenLightbox(index)}
                aria-label={`Ampliar prova: ${item.title}`}
              >
                {(item as any).image ? (
                  <img src={(item as any).image} alt={item.title} className="proof-image" />
                ) : (
                  <div className="proof-placeholder">
                    <span className="placeholder-text">SCREENSHOT {item.id}</span>
                    {item.metrics && (
                      <div className="placeholder-metrics">
                        {item.metrics.split('\n').map((m, i) => <div key={i}>{m}</div>)}
                      </div>
                    )}
                  </div>
                )}
                <div className="proof-hover-overlay">
                  <ZoomIn size={32} color="white" />
                </div>
              </button>
              <p className="proof-caption">{item.title}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={activeScreenshot !== null} 
        onClose={handleCloseLightbox}
        imageTitle={activeScreenshot !== null ? displayScreenshots[activeScreenshot].title : ''}
      >
        {activeScreenshot !== null && (displayScreenshots[activeScreenshot] as any).image ? (
          <img 
            src={(displayScreenshots[activeScreenshot] as any).image} 
            alt={displayScreenshots[activeScreenshot].title} 
            className="lightbox-image" 
          />
        ) : (
          <div className="lightbox-placeholder">
            <span className="placeholder-text">SCREENSHOT {activeScreenshot !== null ? displayScreenshots[activeScreenshot].id : ''} (TELA CHEIA)</span>
          </div>
        )}
      </Lightbox>
    </section>
  );
}
