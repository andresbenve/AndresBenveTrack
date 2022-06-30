import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CenterModeMobileEnglish() {
  return (
    <motion.div className="align-center items-center w-full ">
      {/* <Image
        height={1200}
        width={1450}
        src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/SoloCaraNoBG.png"
        alt=""
      /> */}
      <button
        className="flex w-full  buttonPagar items-center justify-center  text-white text-sm"
        onClick={() => {
          dispatch(addToBasket({ id, title, price, description, image }));
          Swal.fire({
            position: "center",
            title: "Agregado al carrito",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
          router.push("/mobile/checkout");
        }}
      >
        <p> COPY (SEND VIA WP OR MAIL) </p>
      </button>
      <button
        className=" flex flex-col justify-center w-full center items-center flex buttonPagar items-center justify-center  text-white text-sm mb-20"
        onClick={() => {
          dispatch(addToBasket({ id, title, price, description, image }));
          Swal.fire({
            position: "center",
            title: "Agregado al carrito",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
          router.push("/mobile/checkout");
        }}
      >
        <p> DOWNLOAD AS PDF </p>
      </button>
    </motion.div>
  );
}

export default CenterModeMobileEnglish;
