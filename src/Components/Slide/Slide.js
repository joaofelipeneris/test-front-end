import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {

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
                        {console.log(item)}
                        <div className="image">
                            <img src={item.photo} alt="Celular" />
                        </div>
                        <div className="content">
                            <p>{item.descriptionShort}</p>
                            <h4>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                            <h3>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                            <span>ou 2x de R$ 49,95 sem juros</span>
                            <span className="frete">Frete grátis</span>
                            <button type="button">Comprar</button>
                        </div>
                    </div>
                )}
            </Slider>
        </>

    )
}

export default Slide;