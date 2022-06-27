import React from "react";
import Image from "next/image";

function Studio() {
  return (
    <div className="link   link  text-left mt-10">
      <Image
        height={1000}
        width={1750}
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveStudioLight.png"
        alt=""
      />

      {/* <button className="absolute buttonEncuentro ">
        <p className="font-extrabold md:text-sm ">Reservar Encuentro</p>
      </button> */}
    </div>
  );
}

export default Studio;
