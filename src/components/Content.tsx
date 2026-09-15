import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import { Play } from 'lucide-react';
import './Content.css';

export function Content() {
  const { content } = mediaKitData;
  const headlineParts = content.headline.split('\n');

  return (
    <section className="content-section">
      <div className="container">
        <div className="content-header">
          <FadeIn>
            <h2 className="content-headline">
              {headlineParts.map((part, index) => (
                <span key={index} className="headline-line">{part}</span>
              ))}
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="content-description">{content.description}</p>
          </FadeIn>
        </div>

        <div className="reels-grid">
          {content.reels.map((reel, index) => (
            <FadeIn key={index} delay={300 + index * 150} className="reel-item">
              <div className="reel-thumbnail">
                {(reel as any).image ? (
                  <>
                    <img src={(reel as any).image} alt={`Reel ${reel.views}`} className="reel-image" />
                    <div className="play-icon overlay-play">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </>
                ) : (
                  <div className="reel-placeholder">
                    <span className="placeholder-text">THUMBNAIL REEL</span>
                    <div className="play-icon">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                )}
              </div>
              <div className="reel-views">
                <span className="views-value">{reel.views}</span>
                <span className="views-label">VISUALIZAÇÕES</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
