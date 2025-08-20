import Layout from "./Layout";
import Carousel from "./Carousel";
import "./Banner.css";

function VilletteGallery() {
  // Immagini per Villa Antina
  const villaAntinaImages = [
    {
      src: './img/Antina_1.jpg',
      alt: 'Villa Antina - Vista esterna',
      caption: 'Villa Antina - Foxi Manna'
    },
    // Aggiungi altre immagini di Villa Antina qui
  ];

  // Immagini per Villa Congera
  const villaCongeraImages = [
    {
      src: './img/Congera_1.jpg',
      alt: 'Villa Congera - Vista esterna', 
      caption: 'Villa Congera - Melisenda'
    },
    // Aggiungi altre immagini di Villa Congera qui
  ];

  // Immagini per la Marina
  const marinaImages = [
    {
      src: './img/Marina_1.jpg',
      alt: 'Marina di Tertenia',
      caption: 'La splendida Marina di Tertenia'
    },
    // Aggiungi altre immagini della Marina qui
  ];

  return (
    <Layout>
      <section className="banner">
        <div className="banner_text">
          <h3>Le Nostre Villette</h3>
          <p>
            Scopri le nostre splendide villette nella Marina di Tertenia, 
            situate nelle zone più belle e tranquille, a pochi passi dalle 
            spiagge di Foxi Manna e Melisenda.
          </p>
        </div>
      </section>

      {/* Sezione Villa Antina */}
      <section style={{ padding: '40px 10%' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Villa Antina - Foxi Manna
        </h3>
        <Carousel 
          images={villaAntinaImages} 
          autoPlay={true} 
          autoPlayDelay={5000} 
        />
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', lineHeight: '28px' }}>
          Villetta situata nella tranquilla zona di Foxi Manna, 
          a pochi minuti dalla spiaggia più grande della Marina di Tertenia.
        </p>
      </section>

      <hr className="section-separator" />

      {/* Sezione Villa Congera */}
      <section style={{ padding: '40px 10%' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Villa Congera - Melisenda
        </h3>
        <Carousel 
          images={villaCongeraImages} 
          autoPlay={true} 
          autoPlayDelay={5000} 
        />
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', lineHeight: '28px' }}>
          Villetta situata nella zona di Melisenda, vicino alla spiaggia 
          dominata dalla torre di avvistamento spagnola di San Giovanni.
        </p>
      </section>

      <hr className="section-separator" />

      {/* Sezione Marina di Tertenia */}
      <section style={{ padding: '40px 10%' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Marina di Tertenia
        </h3>
        <Carousel 
          images={marinaImages} 
          autoPlay={false} 
        />
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', lineHeight: '28px' }}>
          Le splendide spiagge di Foxi Manna e Melisenda ti aspettano 
          per una vacanza indimenticabile in Ogliastra.
        </p>
      </section>
    </Layout>
  );
}

export default VilletteGallery;
