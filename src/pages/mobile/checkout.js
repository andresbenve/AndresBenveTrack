import React from "react";
import Image from "next/image";
import HeaderMobile from "../../components/mobile/HeaderMobile";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import CheckoutProduct from "../../components/shared/CheckoutProduct";
import { useSession, signOut } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import FooterMobile from "../../components/mobile/FooterMobile";
import { useState, useEffect } from "react";
import router from "next/router";
import Swal from "sweetalert2";
import { aPagar } from "../../slices/basketSlice";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);

  // async function createCheckoutSession() {
  //   const stripe = await stripePromise;

  //   // Call the backEnd to create a checkout session...
  //   const checkoutSession = await axios.post("/api/create-checkout-session", {
  //     items,
  //     email: session.user.email,
  //     //Redirect user/customer to Stripe Checkout
  //   });

  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });
  //   if (result.error) {
  //     alert(result.error.message);
  //   }
  // }
  const [page, setPage] = useState("home");
  const [envio, setEnvio] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const appendSdkScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("view", `${page}`);
    script.onload = () => setHasLoaded(true);
    document.body.append(script);
  };

  function handleChange(e) {
    setEnvio(Number(e.target.value));
    setTotalFinal(Number(e.target.value) + total);
  }

  useEffect(() => {
    setTotalFinal(envio + total);
  }, [, envio, total]);

  const fetchData = async (items) => {
    console.log("console items", items);

    fetch(
      `/api/preference?title=Benve&price=${total}&quantity=1&picture_url=https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png`
    )
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(
          `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`
        );
      })
      .catch((error) => console.log(error));
  };
  const ubicaciones = async (items) => {
    fetch(`/api/envioPack/localidades`)
      .then((res) => res.json())

      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   appendSdkScript();
  // }, [page]);

  return (
    <div>
      <HeaderMobile />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*  Left */}
        <div className="flex-grow m-5 ">
          {/* <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectfit="contain"
          /> */}

          <div className="flex flex-col pb-5 space-y-5 bg-white mb-20">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Cart (vacío)" : "Cart"}
            </h1>
            <div className="grid grid-cols-5 border-b pb-2">
              <h2 className="col-span-2 text-sm mt-2">
                Costo Envio: <span className="font-bold">{`${envio} $`}</span>
              </h2>
              {/* NOTA: Creo que deberíamos hacer un promedio entre los dos GBA */}
              <form className="ml-6">
                <select name="" id="" onChange={(e) => handleChange(e)}>
                  <option value={-1}>Seleccionar Envio</option>
                  <option value={0}>RETIRAR EN LOCAL</option>
                  <option value={506}>CABA</option>
                  <option value={650}>GBA </option>
                </select>
              </form>

              <div className="flex col-span-5 justify-end text-white">.</div>
              <h2 className="flex col-span-5 justify-end  ">
                Subtotal (sin envio) : ${total}
              </h2>
              <h2 className="flex col-span-5 justify-end font-bold ">
                Total : ${totalFinal}
              </h2>
            </div>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/*  Right */}

        <div className="flex flex-col bg-white p-10 wedssew3edf">
          {items.length > 0 && (
            <div>
              {/* <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items ) :
                <span className="font-bold">{`${total} $`}</span>
              </h2> */}
              {/* <button
                disable={!session}
                onClick={() => router.push("/mobile/FormularioEnvios")}
                className={`button mt-2 mb-24 ${
                  !session &&
                  "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Completar Datos Del Envio" : "Proceed to Checkout"}
              </button> */}
              {/* NOTA: boton para pagar con mercado pago */}
              {/* <button
                disable={!session}
                onClick={() => fetchData(items)}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Pagar con Meli" : "Proceed to Checkout"}
              </button> */}
            </div>
          )}
        </div>
      </main>

      {items.length && envio !== -1 ? (
        <div>
          {envio === 0 ? (
            <div
              className="flex flex-col justify-center fixed bottom-16 w-full center items-center flex buttonPagar items-center justify-center w-full text-white text-sm"
              onClick={() => {
                dispatch(aPagar(totalFinal));
                router.push("/mobile/retiroLocal");
              }}
            >
              <h4 className="items-start">INICIAR COMPRA</h4>
              {/* <h4 className="items-end">TOTAL ${totalFinal}</h4> */}
            </div>
          ) : (
            <div
              className="flex flex-col justify-center fixed bottom-16 w-full center items-center flex buttonPagar items-center justify-center w-full text-white text-sm"
              onClick={() => {
                dispatch(aPagar(totalFinal));
                router.push("/mobile/FormularioEnvios");
              }}
            >
              <h4 className="items-start">INICIAR COMPRA</h4>
              {/* <h4 className="items-end">TOTAL ${totalFinal}</h4> */}
            </div>
          )}
        </div>
      ) : (
        <div>
          <button
            className=" flex-col justify-center fixed bottom-16 w-full center items-center flex buttonGoogleMaps items-center justify-center w-full text-white text-sm"
            onClick={() => {
              Swal.fire({
                position: "center",
                title: "Selecccionar Envio y Producto",

                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >
            <h4 className="items-start">INICIAR COMPRA</h4>
            {/* <h4 className="items-end">TOTAL {totalFinal} $</h4> */}
          </button>
        </div>
      )}

      <FooterMobile />
    </div>
  );
}

export default Checkout;
