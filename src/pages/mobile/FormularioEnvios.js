import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";

import { selectPago } from "../../slices/basketSlice";
import HeaderMobile from "../../components/mobile/HeaderMobile";
// import CheckoutProduct from "../../components/shared/CheckoutProduct";

function validate(input) {
  const errors = {};
  if (!input.nombre) {
    errors.nombre = "Completar nombre *";
  }

  if (!input.apellido) {
    errors.apellido = "Completar apellido *";
  }
  if (!input.email) {
    errors.email = "Completar email *";
  }
  if (!input.telefono) {
    errors.telefono = "Completar telefono *";
  }
  if (!input.direccion) {
    errors.direccion = "Completar direccion *";
  }
  if (!input.nrodecalle) {
    errors.nrodecalle = "Completar nrodecalle *";
  }
  if (!input.cp) {
    errors.cp = "Completar cp *";
  }
  if (!input.provincia) {
    errors.provincia = "Completar provincia *";
  }
  if (!input.localidad) {
    errors.localidad = "Completar localidad *";
  }

  return errors;
}
function FormularioEnvios() {
  const totalFormulario = useSelector(selectPago);
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    nrodecalle: "",
    cp: "",
    provincia: "",
    localidad: "",
  });
  const [errors, setErrors] = useState({});

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

  let Avanti = true;
  // NOTA: este useeffect no esta funcionando - revisar mas tarde con mas inspiracion
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      Avanti = true;
    } else {
      Avanti = false;
    }
  }, [input]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="items-center justify-center content-center mb-8 ">
      <HeaderMobile />
      {totalFormulario}

      <div className="ml-6 mt-1 text-sm">Nombre *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Nombre"
        type="text"
        name="nombre"
        value={input.nombre}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.nombre && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.nombre}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Apellido *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Apellido"
        type="text"
        name="apellido"
        value={input.apellido}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.apellido && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.apellido}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Email *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Email"
        type="text"
        name="email"
        value={input.email}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.email && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.email}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Telefono *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Telefono"
        type="number"
        name="telefono"
        value={input.telefono}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.telefono && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.telefono}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Direccion *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Direccion"
        type="text"
        name="direccion"
        value={input.direccion}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.direccion && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.direccion}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Numero De Calle *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="nrodecalle"
        type="number"
        name="nrodecalle"
        value={input.nrodecalle}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.nrodecalle && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.nrodecalle}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">CP *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="CP"
        type="text"
        name="cp"
        value={input.cp}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.cp && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.cp}</p>
      )}
      <div className="ml-6 mt-1 text-sm">Provincia *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Provincia"
        type="text"
        name="provincia"
        value={input.provincia}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.provincia && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.provincia}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Localidad *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="Localidad"
        type="text"
        name="localidad"
        value={input.localidad}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.localidad && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.localidad}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">Observaciones </div>
      <textarea
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        type="text"
        placeholder="Observaciones"
      />
      <div>
        {/* NOTA: cuando la persona hace la compra mando un post con los datos del formulario | lo que la persona compro | el metodo de envio que la persona alla elegido */}
        {Avanti ? (
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
        ) : (
          <div className="bg-gray-100 mt-4">
            {/* SI HAY ALGUN INPUT QUE ESTE INCOMPLETO TENGO QUE PONER LOS BOTONES EN DISABLE */}
            <div
              onClick={() => {
                Swal.fire({
                  position: "center",
                  title: "BUENA DECISION",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }}
              className=" flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow "
            >
              <h6 className="flex col-span-5 text-xs mr-7 justify-end">
                (10% de descuento)
              </h6>
              <div className="flex items-center justify-center  font-bold buttonTransferencia col-span-5 text-white mx-4    ">
                PAGAR CON TRANSFERENCIA
              </div>
              <div
                onClick={() => {
                  router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9");
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
        )}
      </div>
    </div>
  );
}

export default FormularioEnvios;
