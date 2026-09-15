import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Formats.css';

export function Formats() {
  const { formats } = mediaKitData;

  return (
    <section className="formats-section">
      <div className="container">
        <FadeIn>
          <h2 className="formats-headline">{formats.headline}</h2>
        </FadeIn>

        <div className="formats-grid">
          {formats.list.map((format, index) => (
            <FadeIn key={index} delay={150 + index * 50} className="format-item">
              <h3 className="format-title">{format.title}</h3>
              <p className="format-description">{format.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
