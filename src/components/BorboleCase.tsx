import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './BorboleCase.css';

export function BorboleCase() {
  const { borboleCase } = mediaKitData;

  return (
    <section className="borbole-section">
      <div className="container">
        <div className="borbole-grid">
          <div className="borbole-content">
            <FadeIn>
              <div className="borbole-eyebrow">{borboleCase.eyebrow}</div>
            </FadeIn>
            
            <FadeIn delay={150}>
              <h2 className="borbole-headline">{borboleCase.headline}</h2>
            </FadeIn>
            
            <div className="borbole-text">
              <FadeIn delay={300}>
                <div className="borbole-context">
                  <p><strong>{borboleCase.brand}</strong> — {borboleCase.context.replace('Vó Rute já realizou uma publicidade para a Borbolê, ', '')}</p>
                </div>
              </FadeIn>
              
              {borboleCase.paragraphs.map((p, index) => (
                <FadeIn key={index} delay={400 + index * 100}>
                  <p className={index >= 3 ? "highlight-text" : ""}>{p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="borbole-visuals">
            <FadeIn delay={300} className="borbole-main-image">
              {(borboleCase as any).images?.large ? (
                <img src={(borboleCase as any).images.large} alt="Campanha Borbolê" className="borbole-image-large" />
              ) : (
                <div className="image-placeholder">
                  <span className="placeholder-text">IMAGEM DA CAMPANHA</span>
                </div>
              )}
            </FadeIn>
            <FadeIn delay={500} className="borbole-screenshot">
              {(borboleCase as any).images?.small ? (
                <img src={(borboleCase as any).images.small} alt="Publicação Borbolê" className="borbole-image-small" />
              ) : (
                <div className="image-placeholder">
                  <span className="placeholder-text">PUBLICAÇÃO REAL</span>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
