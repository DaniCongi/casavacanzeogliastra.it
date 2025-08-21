import Carousel from './Carousel';
import './Gallery.css';

function GalleryDoveSiamo() {
  const carouselImages = [
    {
      src: './img/DoveSiamo1.jpg',
      alt: 'Marina di Tertenia - Panorama'
    },
    {
      src: './img/DoveSiamo2.jpg',
      alt: 'Marina di Tertenia - Vista panoramica'
    },
    {
      src: './img/DoveSiamo3.jpg',
      alt: 'Costa orientale Sardegna'
    },
    {
      src: './img/DoveSiamo4.jpg',
      alt: 'Scogliera Tertenia'
    },
    {
      src: './img/DoveSiamo5.jpg',
      alt: 'Rocce e mare cristallino Tertenia'
    },
    {
      src: './img/DoveSiamo6.jpg',
      alt: 'Spiaggia di Tertenia'
    },
    {
      src: './img/DoveSiamo7.jpg',
      alt: 'Mare cristallino Ogliastra'
    },
    {
      src: './img/DoveSiamo8.jpg',
      alt: 'Spiaggia di Tertenia - tramonto'
    },
    {
      src: './img/DoveSiamo9.jpg',
      alt: 'Spiaggia di Tertenia - Spiaggetta'
    },
    {
      src: './img/DoveSiamo10.jpg',
      alt: 'Spiaggia di Melisenda - tramonto'
    },
    {
      src: './img/DoveSiamo11.jpg',
      alt: 'Spiaggia di Tertenia - Spiaggia di Foxi Manna'
    },
  ];

  return (
    <div className="gallery-dovesiamo-container">
      <Carousel 
        images={carouselImages} 
        autoPlay={true} 
        autoPlayDelay={4500}
        heroMode={true}
      />
    </div>
  );
}

export default GalleryDoveSiamo;
