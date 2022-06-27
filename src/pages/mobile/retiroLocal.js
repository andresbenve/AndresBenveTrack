import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";

import { selectPago } from "../../slices/basketSlice";
import HeaderMobile from "../../components/mobile/HeaderMobile";
// import CheckoutProduct from "../../components/shared/CheckoutProduct";

function FormularioEnvios() {
  const totalFormulario = useSelector(selectPago);

  const fetchData = async (items) => {
    console.log("console items", items);

    fetch(
      `/api/preference?title=Benve&price=${totalFormulario}&quantity=1&picture_url=https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png`
    )
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(
          `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`
        );
      })
      .catch((error) => console.log(error));
  };

  const SendNewForm = async () => {
    try {
      await fetch("http://localhost:3000/api/tasks/envios", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" items-center justify-center content-center  mb-8">
      <HeaderMobile />

      <div className="mt-48">
        {/* NOTA: cuando la persona hace la compra mando un post con los datos del formulario | lo que la persona compro | el metodo de envio que la persona alla elegido */}

        <div className="bg-gray-100 mt-4">
          {/* SI HAY ALGUN INPUT QUE ESTE INCOMPLETO TENGO QUE PONER LOS BOTONES EN DISABLE */}
          <div className="flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow ">
            {/* <h6 className="flex col-span-5 text-md mr-7 justify-end">
                (10% de descuento)
              </h6> */}
            <div className="flex items-center justify-center  font-bold buttonTransferencia col-span-5 text-white mx-4 mb-0   ">
              PAGAR CON TRANSFERENCIA (-10% DESCUENTO)
            </div>
            <div
              onClick={() => {
                SendNewForm();
                fetchData(items);
              }}
              className="flex items-center justify-center  font-bold buttonMercadoPago col-span-5 text-white m-4 mb-0"
            >
              PAGAR CON MERCADO PAGO
            </div>
            <div className="flex items-center justify-center  font-bold buttonStripe col-span-5 text-white m-4 mb-0">
              PAGAR CON STRIPE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioEnvios;
