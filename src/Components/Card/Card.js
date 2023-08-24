import React from "react";
import "./card.scss"

const Card = ({title, description}) => {
    return (
        <section className="Card">
            <div className="container">
                <div className="card-group">
                    <div className="panel">
                        <div className="infos">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <button type="button">Confira</button>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="infos">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <button type="button">Confira</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;