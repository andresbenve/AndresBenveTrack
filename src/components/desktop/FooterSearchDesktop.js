import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
//redux

import data from "../../../data/data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { vestidosFiltrados } from "../../slices/basketSlice";
import { filtrarVestidos } from "../../slices/basketSlice";
import { idChoosen } from "../../slices/basketSlice";

function FooterSearch() {
  const dispatch = useDispatch();
  const router = useRouter();
  const filtrados = useSelector(vestidosFiltrados);
  const [actual, setactual] = useState(0);
  const [input, setInput] = useState({
    longitud: "",
    color: "",
  });

  useEffect(() => {
    dispatch(filtrarVestidos({ data, input }));

    if (filtrados.length > 0) {
      return;
    } else {
      let filtrados = data;
    }
  }, [dispatch, input]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const resetValues = function () {
    setInput({
      longitud: "",
      color: "",
    });
  };

  const valueActual = (a) => {
    if (actual === 0 && a === -1) {
      return;
    }
    if (actual === filtrados.length - 1 && a === 1) {
      return;
    }
    let modificado = actual + a;
    setactual(modificado);
  };
  return (
    <div className="items-center ">
      {filtrados.length > 0 ? (
        <div>
          <div
            // className="absolute  top-1/2 left-1/2 mr-40 z-50 h-6"
            className="absolute top-1/2 left-0 xl:ml-40 z-50 h-6"
            onClick={() => valueActual(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <Carousel
            autoPlay={false}
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            {filtrados[actual].image.map((i) => (
              <div
                onClick={() => {
                  dispatch(idChoosen(filtrados[actual]));
                  router.push(`/desktop/${filtrados[actual].id}`);
                }}
                className="productImagewrapperSearch rounded-lg mt-3"
              >
                <Image
                  src={i}
                  height="380px"
                  width="290px"
                  className="productImage rounded-lg"
                />
              </div>
            ))}
          </Carousel>
          {/* <p
            onClick={() => {
              router.push(`/${filtrados[actual].id}`);
            }}
            className="mt-1 text-sm text-center"
          >
            {filtrados[actual].title}
          </p>
          <p
            onClick={() => {
              router.push(`/${filtrados[actual].id}`);
            }}
            className="pb-2 text-center text-xs"
          >
            {"$" + filtrados[actual].price}
          </p> */}
          <div
            className="absolute top-1/2 right-0 z-50 h-6 xl:mr-40"
            onClick={() => valueActual(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="mb-2">
        <p> Busca tu Match ❤️‍🔥</p>
        <div className="flex items-center justify-center w-full mb-2 ">
          <select
            onChange={(e) => handleInputChange(e)}
            className="items-center  justify-center w-full "
            name="longitud"
            id=""
          >
            <option hidden>longitud</option>
            <option value="largo">Largo</option>
            <option value="corto">corto</option>
          </select>

          <select
            onChange={(e) => handleInputChange(e)}
            className="items-center  justify-center w-full ml-2"
            name="color"
            id=""
          >
            <option hidden>Elegir Color</option>
            <option value="violeta">🟦🟦🟦🟦🟦🟦🟦🟦</option>
            <option value="rojo">🟥🟥🟥🟥🟥🟥🟥🟥</option>
            <option value="negro">⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️</option>
            <option value="piel">⬜️⬜️⬜️⬜⬜️⬜️⬜️⬜️</option>
          </select>
        </div>
      </div>
      <p>
        {/* <div className="flex items-center justify-center w-full  mb-2 ">
          <button
            onClick={() => valueActual(-1)}
            className="button content-center flex items-center justify-center w-full   "
          >
            anterior
          </button>
          <button
            onClick={() => valueActual(1)}
            className="button content-center flex items-center justify-center w-full   "
          >
            siguiente
          </button>
        </div> */}
        <button
          className="flex button items-center justify-center w-full "
          onClick={() => {
            resetValues();
          }}
        >
          Borrar Filtros
        </button>
      </p>
    </div>
  );
}

export default FooterSearch;

{
  /*

NOTAS

ESTA COMPONENTE VA A TENER MUCHISIMA DATA

HONDULACION Y LARGO CON BARRA SCROLL 
BUSCAN EN EL MOMENTO, O CON BOTON APLICAR?
LOGO PARA COMPARTIR VESTIDOS POR LAS REDES
*/
}
