import './Card.css';

function Card() {
  return (
    <div className="grid">
        <div className="col-33">
            <a href="villette.html" className="card">
                <img src="./src/img/Congera_1.jpg" alt="Villa Congera" className="img_resp"/>
                <div className="card_text">Villa Congera</div> 
            </a>
        </div>
        <div className="col-33">
            <a href="villette.html" className="card">
                <img src="./src/img/Antina_1.jpg" alt="Villa Antina" className="img_resp"/>
                <div className="card_text">Villa Antina</div> 
            </a>
        </div>
        <div className="col-33">
            <a href="dove-siamo.html" className="card">
                <img src="./src/img/Marina_1.jpg" alt="Marina di Tertenia" className="img_resp"/>
                <div className="card_text">Dove Siamo</div>            
            </a>   
        </div>
    </div>
  );
}

export default Card;