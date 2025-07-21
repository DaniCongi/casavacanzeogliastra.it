import { Link } from 'react-router-dom';

function Card({ title, image, link, description }) {
    return (
        <div className="card">
            <Link to={link}>
                <img className="card_image" src={image} alt={title} />
                <div className="card_text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h5 className="card_explore">ESPLORA</h5>
                </div>
            </Link>
        </div>
    );
}

export default Card;