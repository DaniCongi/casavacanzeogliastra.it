import { Link } from "react-router-dom";
import Layout from "./Layout";
import "./Villette.css";
import './Cards.css';
import Card from "./Card";
import GalleryVillette from "./GalleryVillette";

const cardData = [
  {
    title: "Villa Antina",
    image: "/img/Antina_1.jpg",
    link: "/VillaAntina",
    description: "Villa Antina, un luogo perfetto per una vacanza in famiglia o tra amici.",
  },
  {
    title: "Villa Congera",
    image: "/img/Congera_1.jpg",
    link: "/VillaCongera",
    description: "Villa Congera, un rifiugio incantevole per il tuo soggiorno in Sardegna.",
  },
];

function Villette() {
  return (
    <Layout>
      <villette className="villette">
        <div className="villette_text">
          <h3>LE NOSTRE VILLETTE</h3>
          <p>Disponiamo di una villetta nei pressi della spiaggia di Foxi Manna e di una villetta nei pressi della spiaggia di Melisenda. Entrambe le villette sono immerse nella natura e offrono un'atmosfera tranquilla e rilassante.</p>
          <p>Sono dotate di tutti i comfort e di un ampio giardino con barbecue, perfette per chi cerca una vacanza all'insegna del relax e della natura.</p>
        </div>
        <div className="grid cards-grid">
        {cardData.map((card, index) => (
        <div className="col-33 cards-col" key={index}>
          <Card title={card.title} image={card.image} link={card.link} description={card.description}/>
        </div>
       ))}
        </div>
       
      </villette>

      <GalleryVillette />

      <hr className="section-separator" />
    </Layout>
  );    
}
export default Villette;
