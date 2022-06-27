import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurBg from "./BlurBgDesktop";
import Image from "next/image";

function FooterInfo() {
  const [suscribe, setsuscribe] = useState(false);

  return (
    <div>
      <motion.div className="align-center items-center  w-full mt-10 mb-1">
        {/* <img
          src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/SuscribirseABenve.jpg"
          alt=""
        /> */}

        <Image
          height={800}
          width={1450}
          src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/SubscribiteAnita.jpeg"
          alt=""
        />
      </motion.div>
      <div className="container flex  items-center">
        <div className="relative"></div>
        <input
          type="text"
          className="h-14 ml-8 w-full  rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Enter Email"
        />
      </div>
      <div>
        <button className="h-10 w-24 ml-28 mt-3  text-white rounded-lg bg-pink-500 hover:bg-red-600">
          Suscribirme
        </button>
      </div>
      {/* nota: agregar popup que diga que la persona se suscribio a benvech
       */}
      <img
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/FondoBlanco.png"
        alt=""
      />
    </div>
  );
}

export default FooterInfo;
