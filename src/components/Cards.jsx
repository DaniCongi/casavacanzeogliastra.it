import { Link } from 'react-router-dom'; // Importa Link da react-router-dom
import './Cards.css';
import Card from './Card'; // Importa il componente Card

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
          <Link to={card.link} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card_text">
              <h4>{card.title}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;