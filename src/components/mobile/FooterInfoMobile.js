import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function FooterInfo() {
  return (
    <div className="align-center items-center justify-center mb-6">
      {/* <motion.div className="align-center items-center w-full mt-10">
        <Image
          height={800}
          width={1450}
          src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/SubscribiteAnita.jpeg"
          alt=""
        />
      </motion.div> */}
      <div className="flex  items-center justify-center w-full">
        <div className="relative"></div>
        <input
          type="text"
          className="h-14  w-full ml-8 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Ingresar Email para ser contactado"
        />
      </div>
      <div className="ml-8 mr-8">
        <div className="w-full border-t border-black-500"></div>
      </div>
      <div className="flex  items-center justify-center w-full">
        <button className=" h-10 w-24  mt-3   text-white rounded-lg bg-black ">
          Contactar
        </button>
      </div>
      {/* nota: agregar popup de que la persona se suscribio a benve */}
      {/* <img
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/FondoBlanco.png"
        alt=""
      /> */}
    </div>
  );
}

export default FooterInfo;
