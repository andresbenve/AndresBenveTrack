import React from "react";
import Image from "next/image";

function BlurBg() {
  return (
    //<div className="grid grid-cols-4 "> Ojota, con los datos de benve me funcionaba de esta manera
    <div className="imageBlurBg">
      <img
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/png-Fondo-veremos.png"
        objectfit="contain"
      />
    </div>
  );
}

export default BlurBg;
