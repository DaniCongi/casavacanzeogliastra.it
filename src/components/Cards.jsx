import './Cards.css';
import Card from "./Card";


const cardData = [
  {
    title: "Dove Siamo",
    image: "./src/img/Marina_1.jpg",
    link: "/DoveSiamo",
    description: "Scopri la nostra posizione e come raggiungerci facilmente.",
  },
  {
    title: "Villa Antina",
    image: "./src/img/Antina_1.jpg",
    link: "/Villette",
    description: "Esplora la bellezza di Villa Antina, un luogo incantevole per il tuo soggiorno.",
  },
  {
    title: "Villa Congera",
    image: "./src/img/Congera_1.jpg",
    link: "/Villette",
    description: "Scopri Villa Congera, un rifugio perfetto per una fuga romantica o una vacanza in famiglia.",
  },
];

function Cards() {
  return (
    <div className="grid">
      {cardData.map((card, index) => (
        <div className="col-33" key={index}>
          <Card title={card.title} image={card.image} link={card.link} description={card.description}/>
        </div>
      ))}
    </div>
  );
}

export default Cards;