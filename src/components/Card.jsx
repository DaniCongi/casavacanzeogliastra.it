function Card ({ title, image, link }) {
    return (
        <div className="col-33">
            <Link to={link} className="card">
                <img src={image} alt={title} />
                <div className="card_text">
                    <h4>{title}</h4>    
                </div>
            </Link>
        </div>
    );
}
export default Card;