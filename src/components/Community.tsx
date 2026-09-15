import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Community.css';

export function Community() {
  const { community } = mediaKitData;
  const headlineParts = community.headline.split('\n');

  return (
    <section className="community-section">
      <div className="container">
        <div className="community-header">
          <FadeIn>
            <h2 className="community-headline">
              {headlineParts.map((part, index) => (
                <span key={index} className="headline-line">{part}</span>
              ))}
            </h2>
          </FadeIn>
          
          <div className="community-text">
            {community.paragraphs.map((p, index) => (
              <FadeIn key={index} delay={200 + index * 100}>
                <p>{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="community-mosaic">
          {community.images.map((imageSrc, index) => (
            <FadeIn 
              key={index} 
              delay={300 + index * 100}
              className={`mosaic-item mosaic-item-${index + 1}`}
            >
              <img src={imageSrc} alt={`Comentário da comunidade ${index + 1}`} className="comment-image" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
