import React from "react";
import "./title.scss"

const Title = () => {
    return (
        <section className="Title">
            <div className="container">
                <div className="panel-title">
                    <h2>Produtos relacionados</h2>
                    <a href="/" title="Ver todos">Ver todos</a>
                </div>
            </div>
        </section>
    )
}

export default Title;