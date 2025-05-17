import { Link } from 'react-router-dom';

function Card({ title, image, link }) {
    return (
        <div className="card">
            <Link to={link}>
                <img src={image} alt={title} />
                <div className="card_text">
                    <h4>{title}</h4>
                </div>
            </Link>
        </div>
    );
}

export default Card;