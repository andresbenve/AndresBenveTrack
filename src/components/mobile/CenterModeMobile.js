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
      <div>
    
      <div>
    

 <iframe height="100" className="w-full h-96 crop" src="https://rpp-peru.vercel.app/fullStackDeveloper.html">
  
</iframe>

    </div>
    <button
      className=" flex flex-col justify-center w-full center items-center flex buttonPagar items-center justify-center  text-white text-sm mb-20"
    >
      
      <div className="App">
      <header className="App-header" height={200}>
        <div>
          
        </div>
      </header>
      <div>
        <img src="https://res.cloudinary.com/dvev3rzaw/image/upload/v1666118929/CVE_FOR_WEBSITE_nbs5eu.jpg" alt="screen" height={700} />
        
      </div>
    </div>
    </button>
    <p> DOWNLOAD CURRICULUM (PDF)</p>
</div>
    );
  }
}
