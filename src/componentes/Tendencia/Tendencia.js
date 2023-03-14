import './Tendencia.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tendencia = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <main className="container_Tendencias">
      <h2>Tendencias</h2>
      <Slider {...settings}>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (1).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (2).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (3).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (4).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (5).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (6).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (7).jpg"/>
        <img alt="imagen no se cargo correctamente" src="../images/tendencia (8).jpg"/>
      </Slider>
    </main>
  );
};

export default Tendencia;