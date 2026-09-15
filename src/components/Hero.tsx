import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Hero.css';

export function Hero() {
  const { hero } = mediaKitData;

  return (
    <section className="hero-section">
      <div className="hero-background">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mobile.webp" />
          <img src="/hero.webp" alt="Vó Rute" className="hero-image" />
        </picture>
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content container">
        <FadeIn delay={200}>
          <div className="hero-subtitle text-sans">{hero.subtitle}</div>
        </FadeIn>
        
        <FadeIn delay={400}>
          <h1 className="hero-title">{hero.title}</h1>
        </FadeIn>
        
        <FadeIn delay={600}>
          <p className="hero-description text-serif">{hero.description}</p>
        </FadeIn>
        
        <FadeIn delay={800} className="hero-footer text-sans">
          <div className="hero-followers">{hero.followers}</div>
          <div className="hero-handle">{hero.handle}</div>
        </FadeIn>
      </div>
    </section>
  );
}
