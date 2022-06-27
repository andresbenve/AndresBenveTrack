import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

<Image
  className=""
  src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/Vestido%20para%20carrusel%20slick.png"
  height="400px"
  width="300px"
  objectfit="contain"
/>;

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="slick-container mt-10">
        <Slider {...settings}>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/Vestido%20para%20carrusel%20slick.png"
              height="400px"
              width="300px"
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/Vestido%20para%20carrusel%20slick.png"
              height="400px"
              width="300px"
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/Vestido%20para%20carrusel%20slick.png"
              height="400px"
              width="300px"
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/Vestido%20para%20carrusel%20slick.png"
              height="400px"
              width="300px"
              objectfit="contain"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
