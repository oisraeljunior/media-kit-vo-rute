import { mediaKitData } from '../data/mediaKitData';
import { FadeIn } from './FadeIn';
import './Contact.css';

export function Contact() {
  const { contact } = mediaKitData;

  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-content">
          <div className="container">
            <FadeIn>
              <h2 className="contact-headline">{contact.headline}</h2>
            </FadeIn>
            
            <FadeIn delay={150}>
              <p className="contact-description">{contact.description}</p>
            </FadeIn>
            
            <FadeIn delay={300} className="contact-info">
              <div className="contact-item">
                <span className="contact-label">INSTAGRAM</span>
                <span>{contact.instagram}</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={450} className="contact-ctas">
              <a href={contact.ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
                {contact.ctaPrimary}
              </a>
            </FadeIn>
          </div>
        </div>
        
        <div className="contact-visual">
          <img src="/rodape.webp" alt="Vó Rute Contato" className="contact-image" />
        </div>
      </div>
    </section>
  );
}
