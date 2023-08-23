import React from "react";
import "../Footer/footer.scss";
import Facebook from "../Footer/images/facebook.png"
import Instagram from "../Footer/images/instagram.png"
import Youtube from "../Footer/images/youtube.png"
import FormaPagamento from "../Footer/images/formas_pagamento.png"
import Direitos from "../Footer/images/direitos.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="panel-footer">
                    <div className="infos">
                        <div className="about">
                            <div className="list">
                                <h3>Sobre nós</h3>
                                <ul>
                                    <li>
                                        <a href="/" title="Conheça">Conheça</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Como Comprar">Como Comprar</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Indicação e Desconto">Indicação e Desconto</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="/" title="Facebook">
                                            <img src={Facebook} alt="Facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" title="Instagram">
                                            <img src={Instagram} alt="Instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" title="Youtube">
                                            <img src={Youtube} alt="Youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="infos-utils">
                            <div className="list">
                                <h3>INFORMAÇÕES ÚTEIS</h3>
                                <ul>
                                    <li>
                                        <a href="/" title="FALE CONOSCO">FALE CONOSCO</a>
                                    </li>
                                    <li>
                                        <a href="/" title="DÚVIDAS">DÚVIDAS</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Prazos de Entrega">Prazos de Entrega</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Formas de Pagamento">Formas de Pagamento</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Política de privacidade">Política de privacidade</a>
                                    </li>
                                    <li>
                                        <a href="/" title="Trocas e Devoluções">Trocas e Devoluções</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="list">
                                <h3>FORMAS DE PAGAMENTO</h3>
                                <ul>
                                    <li>
                                        <img src={FormaPagamento} alt="Formas de Pagamento" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter">
                        <div className="cta-newsletter">
                            <h3>Cadastre-se e Receba nossas <b>novidades e promoções</b></h3>
                            <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

                            <form>
                                <input type="text" placeholder="Seu E-mail" />
                                <button type="submit" title="ok">OK</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="panel-copy">
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br />É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <div className="logo">
                        <a href="/" title="Direitos">
                            <img src={Direitos} alt="Direitos" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;