import Image from "next/image";
import React from "react";

function ImageFullWidth() {
  return (
    <div className=" mt-12">
      <Image
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoMulticolor.png"
        height="700px"
        width="500px"
        className="productImageFullWidth"
      />
    </div>
  );
}

export default ImageFullWidth;
