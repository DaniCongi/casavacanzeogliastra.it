import { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel({ images, autoPlay = true, autoPlayDelay = 3000, heroMode = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayDelay);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayDelay, images.length, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="carousel-error">Nessuna immagine disponibile</div>;
  }

  return (
    <div className={`carousel ${heroMode ? 'carousel-hero' : ''}`}>
      <div className="carousel-container">
        {/* Immagine corrente */}
        <div className="carousel-slide">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          {images[currentIndex].caption && (
            <div className="carousel-caption">
              {images[currentIndex].caption}
            </div>
          )}
        </div>

        {/* Frecce di navigazione */}
        {images.length > 1 && (
          <>
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={goToPrevious}
              aria-label="Immagine precedente"
            >
              &#8249;
            </button>
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={goToNext}
              aria-label="Immagine successiva"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
