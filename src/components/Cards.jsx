import './Cards.css';
import Card from "./Card";


const cardData = [
  {
    title: "Dove Siamo",
    image: "/img/Marina_1.jpg",
    link: "/DoveSiamo",
    description: "La nostra posizione e come raggiungerci facilmente.",
  },
  {
    title: "Villa Antina",
    image: "/img/Antina_1.jpg",
    link: "/Villette",
    description: "Villa Antina, un luogo perfetto per una vacanza in famiglia o tra amici.",
  },
  {
    title: "Villa Congera",
    image: "/img/Congera_1.jpg",
    link: "/Villette",
    description: "Villa Congera, un rifiugio incantevole per il tuo soggiorno in Sardegna.",
  },
];

function Cards() {
  return (
    <div className="grid cards-grid">
      {cardData.map((card, index) => (
        <div className="col-33 cards-col" key={index}>
          <Card title={card.title} image={card.image} link={card.link} description={card.description}/>
        </div>
      ))}
    </div>
  );
}

export default Cards;