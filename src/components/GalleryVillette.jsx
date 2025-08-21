import Carousel from "./Carousel";
import "./Gallery.css";

function GalleryVillette() {
  const marinaImages = [
    {
      src: './img/Villette (1).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (2).jpg',    
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (3).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (4).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },  
    {
      src: './img/Villette (5).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (6).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (7).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (8).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (9).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (10).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (11).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (12).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (13).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (14).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (15).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (16).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (17).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (18).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (19).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (20).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (21).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (22).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (23).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (24).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (25).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (26).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Foxi Manna',
    },
    {
      src: './img/Villette (27).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
    {
      src: './img/Villette (28).jpg',
      alt: 'Marina di Tertenia - Spiaggia di Melisenda',
    },
  ];

  return (
    <div className="gallery-villette-container">
      <Carousel 
        images={marinaImages} 
        autoPlay={true} 
        autoPlayDelay={4500}
        heroMode={true}
      />
    </div>
  );
}

export default GalleryVillette;
