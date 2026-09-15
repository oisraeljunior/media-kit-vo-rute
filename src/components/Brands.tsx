import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Brands.css';

export function Brands() {
  const { brands } = mediaKitData;

  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-header">
          <FadeIn>
            <h2 className="brands-headline">{brands.headline}</h2>
          </FadeIn>
          
          <FadeIn delay={150}>
            <p className="brands-description">{brands.description}</p>
          </FadeIn>
        </div>

        <div className="brands-typography-cloud">
          {brands.categories.map((category, index) => {
            // Alternating font families and sizes for a dynamic editorial look
            const isSerif = index % 3 === 0 || index % 5 === 0;
            const isLarge = index % 4 === 0;
            
            return (
              <FadeIn 
                key={index} 
                delay={200 + (index * 50)} 
                className="brand-category-wrapper"
              >
                <span className={`brand-category ${isSerif ? 'text-serif italic' : 'text-sans'} ${isLarge ? 'large' : ''}`}>
                  {category}
                </span>
                {index < brands.categories.length - 1 && (
                  <span className="brand-separator">•</span>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
