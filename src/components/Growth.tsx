import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Growth.css';

export function Growth() {
  const { growth } = mediaKitData;

  return (
    <section className="growth-section">
      <div className="container">
        <div className="growth-header">
          <FadeIn>
            <h2 className="growth-headline">{growth.headline}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="growth-subheadline text-serif">{growth.subheadline}</p>
          </FadeIn>
        </div>
        
        <div className="metrics-grid">
          {growth.metrics.map((metric, index) => (
            <FadeIn key={index} delay={300 + index * 100} className="metric-item">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={800}>
          <div className="growth-footer">
            {growth.footer}
            <div className="update-date">Dados atualizados em {mediaKitData.lastUpdated}.</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
