import React from "react";
import "../Hero/hero.scss";
import HeroImage from "../Hero/images/hero.png"

const Hero = () => {
    return(
        <section className="Hero" style={{background: `url(${HeroImage})`}}>
            <div className="container">
                <div className="content">
                    <h1>Venha conhecer nossas promoções</h1>
                    <h2>50% Off nos produtos</h2>
                    <button type="button" title="Ver produto">Ver produto</button>
                </div>
            </div>
        </section>
    )
}

export default Hero;