import React, { Component } from "react";
import "../Products/products.scss";
import Tecnologia from "../Products/images/tecnologia.png"
import Supermercado from "../Products/images/supermercados.png"
import Bebidas from "../Products/images/bebidas.png"
import Ferramentas from "../Products/images/ferramentas.png"
import Saude from "../Products/images/saude.png"
import EsportesFitness from "../Products/images/esportesfitness.png"
import Moda from "../Products/images/moda.png"
import Slide from "../Slide/Slide";

export default class SimpleSlider extends Component {

    render() {

        return (
            <section className="Products">
                <div className="container">
                    <div className="category">
                        <a href="/" title="Tecnologia">
                            <div className="item">
                                <div className="image">
                                    <img src={Tecnologia} alt="Tecnologia" />
                                </div>
                                <p>Tecnologia</p>
                            </div>
                        </a>
                        <a href="/" title="Supermercado">
                            <div className="item">
                                <div className="image">
                                    <img src={Supermercado} alt="Supermercado" />
                                </div>
                                <p>Supermercado</p>
                            </div>
                        </a>
                        <a href="/" title="Bebidas">
                            <div className="item">
                                <div className="image">
                                    <img src={Bebidas} alt="Bebidas" />
                                </div>
                                <p>Bebidas</p>
                            </div>
                        </a>
                        <a href="/" title="Ferramentas">
                            <div className="item">
                                <div className="image">
                                    <img src={Ferramentas} alt="Ferramentas" />
                                </div>
                                <p>Ferramentas</p>
                            </div>
                        </a>
                        <a href="/" title="Saúde">
                            <div className="item">
                                <div className="image">
                                    <img src={Saude} alt="Saúde" />
                                </div>
                                <p>Saúde</p>
                            </div>
                        </a>
                        <a href="/" title="Esportes e Fitness">
                            <div className="item">
                                <div className="image">
                                    <img src={EsportesFitness} alt="Esportes e Fitness" />
                                </div>
                                <p>Esportes e Fitness</p>
                            </div>
                        </a>
                        <a href="/" title="Moda">
                            <div className="item">
                                <div className="image">
                                    <img src={Moda} alt="Moda" />
                                </div>
                                <p>Moda</p>
                            </div>
                        </a>
                    </div>
                    <div className="slideproducts">
                        <h2>Produtos relacionados</h2>

                        <ul>
                            <li>
                                <a href="/" title="celular">celular</a>
                            </li>
                            <li>
                                <a href="/" title="acessórios">acessórios</a>
                            </li>
                            <li>
                                <a href="/" title="tablets">tablets</a>
                            </li>
                            <li>
                                <a href="/" title="NOTEBOOKS">NOTEBOOKS</a>
                            </li>
                            <li>
                                <a href="/" title="TVs">TVs</a>
                            </li>
                            <li>
                                <a href="/" title="Ver todos">Ver todos</a>
                            </li>
                        </ul>

                        <Slide />                        
                    </div>
                </div>
            </section>
        );
    }
}