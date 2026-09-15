import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Audience.css';

export function Audience() {
  const { audience } = mediaKitData;

  // Find max percentage to scale bars relative to the highest value
  const maxPercentage = Math.max(...audience.ageData.map(d => d.percentage));

  return (
    <section className="audience-section">
      <div className="container">
        <div className="audience-grid">
          <div className="audience-info">
            <FadeIn>
              <h2 className="audience-headline">{audience.headline}</h2>
            </FadeIn>
            
            <FadeIn delay={150}>
              <p className="audience-description">{audience.description}</p>
            </FadeIn>
            
            <div className="audience-highlights">
              {audience.highlights.map((item, index) => (
                <FadeIn key={index} delay={300 + index * 100} className="highlight-item">
                  <div className="highlight-value">{item.value}</div>
                  <div className="highlight-label">{item.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="audience-data">
            <FadeIn delay={400} className="data-box age-data">
              <h3 className="data-title">IDADE</h3>
              <div className="age-chart">
                {audience.ageData.map((item, index) => (
                  <div key={index} className="age-row">
                    <div className="age-range">{item.range}</div>
                    <div className="age-bar-wrapper">
                      <div 
                        className="age-bar" 
                        style={{ width: `${(item.percentage / maxPercentage) * 100}%` }}
                      ></div>
                    </div>
                    <div className="age-percentage">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={600} className="data-box geo-data">
              <h3 className="data-title">PRINCIPAIS CIDADES</h3>
              <div className="geo-list">
                {audience.geography.map((item, index) => (
                  <div key={index} className="geo-row">
                    <span className="geo-city">{item.city}</span>
                    <span className="geo-percentage">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
