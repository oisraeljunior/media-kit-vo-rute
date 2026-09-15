import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './HotPark.css';

export function HotPark() {
  const { hotParkCase } = mediaKitData;

  return (
    <section className="hotpark-section">
      <div className="container">
        <div className="hotpark-header">
          <FadeIn>
            <h2 className="hotpark-headline">{hotParkCase.headline}</h2>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="hotpark-subheadline">
              {hotParkCase.subheadline.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="hotpark-gallery">
          <FadeIn delay={300} className="gallery-main">
            {(hotParkCase as any).images && (hotParkCase as any).images[0] ? (
              <img src={(hotParkCase as any).images[0]} alt="Hot Park Vó Rute Principal" className="hotpark-image" />
            ) : (
              <div className="image-placeholder">
                <span className="placeholder-text">FOTO PRINCIPAL VIAGEM</span>
              </div>
            )}
          </FadeIn>
          
          <div className="gallery-side">
            <FadeIn delay={400} className="gallery-item">
              {(hotParkCase as any).images && (hotParkCase as any).images[1] ? (
                <img src={(hotParkCase as any).images[1]} alt="Hot Park Vó Rute 2" className="hotpark-image" />
              ) : (
                <div className="image-placeholder">
                  <span className="placeholder-text">FOTO SECUNDÁRIA 01</span>
                </div>
              )}
            </FadeIn>
            <FadeIn delay={500} className="gallery-item">
              {(hotParkCase as any).images && (hotParkCase as any).images[2] ? (
                <img src={(hotParkCase as any).images[2]} alt="Hot Park Vó Rute 3" className="hotpark-image" />
              ) : (
                <div className="image-placeholder">
                  <span className="placeholder-text">FOTO SECUNDÁRIA 02</span>
                </div>
              )}
            </FadeIn>
          </div>
        </div>

        <div className="hotpark-text-grid">
          {hotParkCase.paragraphs.map((p, index) => (
            <FadeIn key={index} delay={600 + index * 100} className="hotpark-text-item">
              <p>{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
