import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './About.css';

export function About() {
  const { about } = mediaKitData;
  const headlineParts = about.headline.split('\n');

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <FadeIn>
              <h2 className="about-headline">
                {headlineParts.map((part, index) => (
                  <span key={index} className="headline-line">{part}</span>
                ))}
              </h2>
            </FadeIn>
            
            <div className="about-text">
              {about.paragraphs.map((p, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <FadeIn delay={300} className="about-image-container">
              <img src="/secao2.webp" alt="Vó Rute" className="about-image" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
