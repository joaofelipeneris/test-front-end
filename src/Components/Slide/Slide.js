import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import "./slide.scss";

const Slide = () => {
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const { valueApi } = useContext(Context);

    return (
        <>
            <Slider {...settings}>
                {valueApi.map((item) =>
                    <div className="slide-panel">
                        <div className="image">
                            <img src={item.photo} alt={item.productName} />
                        </div>
                        <div className="content">
                            <p>{item.productName}</p>
                            <h4>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                            <h3>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                            <span>ou 2x de R$ 49,95 sem juros</span>
                            <span className="frete">Frete grátis</span>
                            <button type="button" onClick={abrirModal}>Comprar</button>
                        </div>
                    </div>
                )}
            </Slider>
            {valueApi.map((item, key) =>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={fecharModal}
                    contentLabel="Modal"
                    id={key}
                >
                    <div className="image">
                        <img src={item.photo} alt={item.productName} />
                    </div>
                    <div className="content">
                        <div className="clear">
                            <button type="button" onClick={fecharModal}>X</button>
                        </div>
                        <h2>{item.productName}</h2>
                        <span>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                        <p>{item.descriptionShort}</p>   
                        <a href="/" title="Veja mais detalhes do produto >">Veja mais detalhes do produto </a>
                        <button className="buy" type="button">Comprar</button>
                    </div>
                </Modal>
            )}
        </>

    )
}

export default Slide;