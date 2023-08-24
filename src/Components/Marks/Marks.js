import React from "react";
import "./marks.scss"
import Logo from "./images/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Marks = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
    return (
        <section className="Marks">
            <div className="container">
                <div className="panel-marks">
                    <h2>Navegue por marcas</h2>
                    <div className="content">
                        <Slider {...settings}>
                            <a href="/" title="VTEX">
                                <div className="item">
                                    <img src={Logo} alt="VTEX" />
                                </div>
                            </a>
                            <a href="/" title="VTEX">
                                <div className="item">
                                    <img src={Logo} alt="VTEX" />
                                </div>
                            </a>
                            <a href="/" title="VTEX">
                                <div className="item">
                                    <img src={Logo} alt="VTEX" />
                                </div>
                            </a>
                            <a href="/" title="VTEX">
                                <div className="item">
                                    <img src={Logo} alt="VTEX" />
                                </div>
                            </a>
                            <a href="/" title="VTEX">
                                <div className="item">
                                    <img src={Logo} alt="VTEX" />
                                </div>
                            </a>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Marks;