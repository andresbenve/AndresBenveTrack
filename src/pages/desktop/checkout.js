import React from "react";
import Image from "next/image";
import HeaderDesktop from "../../components/desktop/HeaderDesktop";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import CheckoutProduct from "../../components/shared/CheckoutProduct";
import { useSession, signOut } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
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

  const ubicaciones = async (items) => {
    fetch(`/api/enviopack/localidades`)
      .then((res) => res.json())

      .catch((error) => console.log(error));
  };

  const [page, setPage] = useState("home");
  const [hasLoaded, setHasLoaded] = useState(false);
  const appendSdkScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("view", `${page}`);
    script.onload = () => setHasLoaded(true);
    document.body.append(script);
  };

  const fetchData = async (items) => {
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

  // useEffect(() => {
  //   appendSdkScript();
  // }, [page]);

  return (
    <div>
      <HeaderDesktop />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*  Left */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Ya encontraras tu match ideal ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥"
                : "Cart"}
            </h1>
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
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectfit="contain"
          />
        </div>
        {/*  Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items ) :
                <span className="font-bold">{`${total} $`}</span>
              </h2>
              <button
                disable={!session}
                onClick={() => {
                  fetchData(items);
                }}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Pagar con Meli" : "Proceed to Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;

// import React from "react";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import HeaderDesktop from "../../components/desktop/HeaderDesktop";
// import { useSelector } from "react-redux";
// import { selectItems, selectTotal } from "../../slices/basketSlice";
// import CheckoutProduct from "../../components/shared/CheckoutProduct";
// import { useSession, signOut } from "next-auth/react";
// import { loadStripe } from "@stripe/stripe-js";
// import FooterDesktop from "../../components/desktop/FooterDesktop";
// import Swal from "sweetalert2";
// const stripePromise = loadStripe(process.env.stripe_public_key);

// function Checkout() {
//   const items = useSelector(selectItems);
//   const { data: session, status } = useSession();
//   const total = useSelector(selectTotal);

//   function handleChange(e) {
//     setEnvio(Number(e.target.value));
//     setTotalFinal(Number(e.target.value) + total);
//   }
//   // async function createCheckoutSession() {
//   //   const stripe = await stripePromise;

//   //   // Call the backEnd to create a checkout session...
//   //   const checkoutSession = await axios.post("/api/create-checkout-session", {
//   //     items,
//   //     email: session.user.email,
//   //     //Redirect user/customer to Stripe Checkout
//   //   });

//   //   const result = await stripe.redirectToCheckout({
//   //     sessionId: checkoutSession.data.id,
//   //   });
//   //   if (result.error) {
//   //     alert(result.error.message);
//   //   }
//   // }

//   const [page, setPage] = useState("home");
//   const [envio, setEnvio] = useState(0);

//   const [totalFinal, setTotalFinal] = useState(0);
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const appendSdkScript = () => {
//     const script = document.createElement("script");
//     script.src =
//       "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
//     script.setAttribute("view", `${page}`);
//     script.onload = () => setHasLoaded(true);
//     document.body.append(script);
//   };

//   const fetchData = async (items) => {
//     fetch(
//       `/api/preference?title=Benve&price=${total}&quantity=1&picture_url=https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         window.location.replace(
//           `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`
//         );
//       })
//       .catch((error) => console.log(error));
//   };

//   // useEffect(() => {
//   //   appendSdkScript();
//   // }, [page]);

//   return (
//     <div>
//       <HeaderDesktop />
//       <main className="lg:flex max-w-screen-2xl mx-auto">
//         {/*  Left */}
//         <div className="flex-grow  m-5 shadow-sm">
//           <div className="flex flex-col p-5 space-y-10 bg-white">
//             <h1 className="text-3xl border-b pb-4">
//               {items.length === 0 ? "Cart (vacio)" : "Cart"}
//             </h1>
//             {items.map((item, i) => (
//               <CheckoutProduct
//                 key={i}
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 description={item.description}
//                 image={item.image}
//               />
//             ))}
//           </div>
//           <Image
//             src="https://links.papareact.com/ikj"
//             width={1020}
//             height={250}
//             objectfit="contain"
//           />
//         </div>
//         {/*  Right */}
//         <div className="flex flex-col bg-white p-10 shadow-md pt-20 ">
//           <div className="grid grid-cols-2 border-b pb-2">
//             {/* NOTA: Creo que deberíamos hacer un promedio entre los dos GBA */}
//             <h2 className="flex col-span-3 justify-end">Seleccionar Envío</h2>
//             <form className="ml-6 font-bold">
//               <select name="" id="" onChange={(e) => handleChange(e)}>
//                 <option value={0}>Seleccionar Zona</option>
//                 <option value={0}>RETIRAR EN LOCAL</option>
//                 <option value={506}>CABA</option>

//                 <option value={506}>GBA 1</option>

//                 <option value={595}>GBA 2</option>
//               </select>
//             </form>

//             <div className="flex col-span-5 justify-end text-white">.</div>
//             <h2 className="flex col-span-5 justify-end  ">
//               Subtotal (sin envio) : {total} $
//             </h2>
//             <h2 className="text-white">.</h2>
//             <h2 className="flex col-span-5 justify-end  ">
//               Costo Envio: <span className="ml-9">{`${envio} $`}</span>
//             </h2>
//             <h2 className="text-white">.</h2>
//             <h2 className="flex col-span-5 justify-end font-bold ">
//               Total : ${totalFinal}
//             </h2>
//           </div>
//           {items.length > 0 && envio !== 0 ? (
//             <div>
//               <button
//                 disable={!session}
//                 onClick={() => fetchData(items)}
//                 className={`w-full button mt-2 ${
//                   !session &&
//                   "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
//                 }`}
//               >
//                 {!session ? "INICIAR COMPRA" : "Proceed to Checkout"}
//               </button>
//             </div>
//           ) : (
//             <div>
//               <button
//                 disable={!session}
//                 onClick={() => {
//                   Swal.fire({
//                     position: "center",
//                     title: "Selecccionar Envio y Producto",

//                     showConfirmButton: false,
//                     timer: 1500,
//                   });
//                 }}
//                 className={`w-full button mt-2 ${
//                   !session &&
//                   "from-gray-200 border-gray-200 text-gray-300 cursor-not-allowed"
//                 }`}
//               >
//                 {!session ? "INICIAR COMPRA" : "Proceed to Checkout"}
//               </button>
//             </div>
//           )}
//         </div>
//       </main>
//       {/* <FooterDesktop /> */}
//     </div>
//   );
// }

// export default Checkout;
