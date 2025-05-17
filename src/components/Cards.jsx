import './Cards.css';
import Card from "./Card";


const cardData = [
  {
    title: "Dove Siamo",
    image: "./src/img/Marina_1.jpg",
    link: "/DoveSiamo",
  },
  {
    title: "Villa Antina",
    image: "./src/img/Antina_1.jpg",
    link: "/Villette",
  },
  {
    title: "Villa Congera",
    image: "./src/img/Congera_1.jpg",
    link: "/Villette",
  },
];

function Cards() {
  return (
    <div className="grid">
      {cardData.map((card, index) => (
        <div className="col-33" key={index}>
          <Card title={card.title} image={card.image} link={card.link} />
        </div>
      ))}
    </div>
  );
}

export default Cards;