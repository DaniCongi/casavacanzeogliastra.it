import Carousel from "./Carousel";
import "./Gallery.css";

function GalleryVillaCongera() {
  const villaCongeraImages = [
    {
      src: './img/VillaCongi (1).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (2).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (3).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (4).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (5).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (6).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (7).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (8).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (9).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (10).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (11).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (12).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (13).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (14).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
    {
      src: './img/VillaCongi (15).jpg',
      alt: 'Villetta Ogliastra - Villa Congera',
    },
  ];

  return (
    <div className="gallery-villaCongera-container">
      <Carousel 
        images={villaCongeraImages} 
        autoPlay={true} 
        autoPlayDelay={4500}
        heroMode={true}
      />
    </div>
  );
}

export default GalleryVillaCongera;