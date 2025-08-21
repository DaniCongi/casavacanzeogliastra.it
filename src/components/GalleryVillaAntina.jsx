import Carousel from "./Carousel";
import "./Gallery.css";

function GalleryVillaAntina() {
  const villaAntinaImages = [
    {
      src: './img/VillaAntina (2).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (3).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (4).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (5).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (6).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (7).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (8).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (9).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (10).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (11).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (12).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (13).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
    {
      src: './img/VillaAntina (14).jpg',
      alt: 'Villetta Ogliastra - Villa Antina',
    },
  ];

  return (
    <div className="gallery-villaAntina-container">
      <Carousel 
        images={villaAntinaImages} 
        autoPlay={true} 
        autoPlayDelay={4500}
        heroMode={true}
      />
    </div>
  );
}

export default GalleryVillaAntina;