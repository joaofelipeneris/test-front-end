import React from "react";
import "../Nav/nav.scss";
import Compra from "../Nav/images/compra.png"
import Frete from "../Nav/images/frete.png"
import Pagamento from "../Nav/images/pagamento.png"
import Logo from "../Nav/images/logo.png"
import Lupa from "../Nav/images/lupa.png"
import Entrega from "../Nav/images/entrega.png"
import Favoritos from "../Nav/images/coracao.png"
import Usario from "../Nav/images/usuario.png"
import Assinatura from "../Nav/images/assinatura.png"

const Nav = () => {
    return (
        <header className="Nav">
            <div className="container">
                <div className="nav-panel">
                    <div className="cta">
                        <div className="item">
                            <img src={Compra} alt="Compra 100% segura" />
                            <p>Compra <b>100% segura</b></p>
                        </div>
                        <div className="item">
                            <img src={Frete} alt="Frete grátis acima de R$ 200" />
                            <p><b>Frete grátis</b> acima de R$ 200</p>
                        </div>
                        <div className="item">
                            <img src={Pagamento} alt="Parcele suas compras" />
                            <p><b>Parcele</b> suas compras</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="logo">
                            <a href="/" title="VTEX">
                                <img src={Logo} alt="VTEX" />
                            </a>
                        </div>
                        <div className="search">
                            <form>
                                <input type="search" placeholder="O que você está buscando?" />
                            </form>
                            <img src={Lupa} alt="Lupa" />
                        </div>
                        <div className="buttons">
                            <button type="button">
                                <img src={Entrega} alt="Entrega" />
                            </button>
                            <button type="button">
                                <img src={Favoritos} alt="Favoritos" />
                            </button>
                            <button type="button">
                                <img src={Usario} alt="Usario" />
                            </button>
                            <button type="button">
                                <img src={Entrega} alt="Entrega" />
                            </button>
                        </div>
                    </div>
                    <div className="nav-items">
                        <nav>
                            <ul>
                                <li>
                                    <a
                                        href="/" title="Todas Categorias">Todas Categorias</a>
                                </li>
                                <li>
                                    <a href="/" title="Supermercado">Supermercado</a>
                                </li>
                                <li>
                                    <a href="/" title="Livros">Livros</a>
                                </li>
                                <li>
                                    <a href="/" title="Moda">Moda</a>
                                </li>
                                <li>
                                    <a href="/" title="Lançamentos">Lançamentos</a>
                                </li>
                                <li>
                                    <a href="/" title="Ofertas do dia">Ofertas do dia</a>
                                </li>
                                <li>
                                    <img src={Assinatura} alt="Assinatura" />
                                    <a href="/" title="Assinatura">Assinatura</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;