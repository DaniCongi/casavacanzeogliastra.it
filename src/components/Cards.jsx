import './Cards.css';

function Cards() {
    /*
    qui il concetto è sbagliato, una card dovrebbe essere generica, dovrebbe innanzitutto chiamarsi Card al sigolare.
    dovrebbe poi essere una card generica a cui passi delle proprietà, come ad esempio il titolo, il testo e l'immagine(lo vedrai più avanti, per ora lascia stare).
    in questo modo puoi riutilizzare la card per qualsiasi cosa, non solo per le ville, ma anche per i ristoranti, le spiagge, ecc, proprio ome un contenitore generico. Utile anche per evitare codice duplicato.
    ogni proprietà passata alla card dovrebbe essere verosimilmente un componente, in modo che sia tutto riutilizzabile.
    */
  return (
    <div className="grid">
        <div className="col-33">
            <a href="dove-siamo.html" className="card">
                <img src="./src/img/Marina_1.jpg" alt="Marina di Tertenia" />
                <div className="card_text">
                    <h4>Dove Siamo</h4>
                </div>
            </a>
        </div>
        <div className="col-33">
            <a href="villette.html" className="card">
            <img src="./src/img/Antina_1.jpg" alt="Villa Antina"/>
            <div className="card_text">
            <h4>Villa Antina</h4>            
            </div>
            </a>
        </div>
        <div className="col-33">
            <a href="villette.html" className="card">
            <img src="./src/img/Congera_1.jpg" alt="Villa Congera"/>
            <div className="card_text">
            <h4>Villa Congera</h4>            
            </div> 
            </a>
        </div>
    </div>
  );
}

export default Cards;