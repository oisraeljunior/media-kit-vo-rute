import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Investment.css';

export function Investment() {
  const { investment } = mediaKitData;
  const headlineParts = investment.headline.split('\n');

  return (
    <section className="investment-section">
      <div className="container">
        <div className="investment-content">
          <FadeIn>
            <h2 className="investment-headline">
              {headlineParts.map((part, index) => (
                <span key={index} className="headline-line">{part}</span>
              ))}
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="investment-description">{investment.description}</p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="investment-highlight">{investment.highlight}</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
