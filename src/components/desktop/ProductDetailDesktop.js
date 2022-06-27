// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { idChoosen } from "../slices/basketSlice";
// import { useRouter } from "next/router";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from "next/image";

// import { addToBasket } from "../slices/basketSlice";
// import Swal from "sweetalert2";

// function ProductDetail({ id, title, price, description, image }) {
//   const dispatch = useDispatch();
//   return (
//     <div className="  flex flex-col  m-5  bg-white z-30 ">
//       <Carousel
//         autoPlay={false}
//         infiniteLoop
//         showArrows={false}
//         showStatus={false}
//         showIndicators={true}
//         showThumbs={false}
//       >
//         <div className="productImagewrapperDetail rounded-lg mt-3">
//           <Image
//             src={image}
//             height="400px"
//             width="250px"
//             className="productImage rounded-lg"
//           />
//         </div>
//         <div className="productImagewrapperDetail rounded-lg mt-3">
//           <Image
//             src={image}
//             height="400px"
//             width="250px"
//             className="productImage rounded-lg"
//           />
//         </div>
//         <div className="productImagewrapperDetail rounded-lg mt-3">
//           <Image
//             src={image}
//             height="400px"
//             width="250px"
//             className="productImage rounded-lg"
//           />
//         </div>
//       </Carousel>

//       <p className="mt-7 text-sm text-center">{title}</p>

//       <p className="pb-2 text-center text-xs">{"$" + price}</p>
//       <button
//         className="mt-auto button flex flex-row"
//         onClick={() => {
//           dispatch(addToBasket({ id, title, price, description, image }));
//           Swal.fire({
//             position: "center",
//             title: "Agregado al carrito",
//             icon: "info",
//             showConfirmButton: false,
//             timer: 1000,
//           });
//         }}
//       >
//         <p className="ml-36 mt-1"> COMPRAR </p>
//       </button>
//     </div>
//   );
// }
// export default ProductDetail;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { idChoosen } from "../../slices/basketSlice";
import router, { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Header from "../desktop/HeaderDesktop";

import { addToBasket } from "../../slices/basketSlice";
import Swal from "sweetalert2";

function ProductDetailDesktop({ id, title, price, description, image }) {
  const [bigImg, setbigImg] = useState(true);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      {bigImg ? (
        <div className="  flex flex-col  m-5  bg-white z-30 ">
          <Carousel
            autoPlay={false}
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            {image.map((i) => (
              <div
                onClick={() => setbigImg(!bigImg)}
                key={id}
                className="productImagewrapperDetailDesk rounded-lg mt-3"
              >
                <Image
                  src={i}
                  height="590px"
                  width="400px"
                  className="productImage rounded-lg"
                />
              </div>
            ))}
          </Carousel>

          <p className="mt-1 text-sm text-center">{title}</p>

          <p className="pb-2 text-center text-xs">{"$" + price}</p>
          <button
            className="mt-auto button flex flex-row justify-center"
            onClick={() => {
              dispatch(addToBasket({ id, title, price, description, image }));
              Swal.fire({
                position: "center",
                title: "Agregado al carrito",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              });
              router.push("/desktop/checkout");
            }}
          >
            <p className="mt-1"> COMPRAR </p>
          </button>
        </div>
      ) : (
        <div className="absolute h-full w-full z-50  ">
          <button className="absolute right-0 md:right-10 h-4 w-4 bg-white text-center rounded text-black font-bold p-10 mr-80">
            X
          </button>
          <Carousel
            autoPlay={false}
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            showThumbs={true}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            {image.map((i) => (
              <div
                onClick={() => setbigImg(!bigImg)}
                key={id}
                className="productImagewrapperDetailFullS rounded-lg mt-3"
              >
                <Image
                  src={i}
                  height="850px"
                  width="550px"
                  className="productImage rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default ProductDetailDesktop;
