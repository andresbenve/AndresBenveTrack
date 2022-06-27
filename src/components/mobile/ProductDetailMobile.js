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
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Swal from "sweetalert2";
import router from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addToBasket } from "../../slices/basketSlice";

function ProductDetail({ id, title, price, description, image }) {
  const [bigImg, setbigImg] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  console.log("console estoy aca");

  return (
    <div>
      {bigImg ? (
        <div className="  flex flex-col    bg-white z-30 mb-24">
          <div className="m-5">
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
                  className="productImagewrapperDetail  rounded-lg mt-3"
                >
                  <Image
                    src={i}
                    height="590px"
                    width="450px"
                    className="productImage rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
            <p className="mt-1 text-sm text-center">{title}</p>
            <p className="pb-2 text-center text-xs">{"$" + price}</p>
            <p className="m-4 text-justify text-xs">{description}</p>{" "}
          </div>
          {/* NOTA: alternativa anterior con botton arriba de description debajo en el siguiente comentario */}
          {/* <button
            className="mt-auto button text-white  flex flex-row justify-center"
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
            <p className=" mt-1"> COMPRAR </p>
          </button>
*/}
          {/* <ChevronUpIcon
            className="fixed  bottom-12 h-6 w-6 z-50 w-full  bg-gray-100 grid grid-cols-5  content-evenly"
            onClick={() => setIsOpen(!isOpen)}
          /> */}
          {/* {isOpen ? (
            <>
              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 1000 }}
                initial={{ y: "25%" }}
                animate={{ y: "0%" }}
                onDragEnd={(event, isOpen) => setIsOpen(!isOpen)}
                className=" top-0 fixed z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <BlurBg />
              </motion.div>
              <motion.div
                className="bottom-12 fixed bg-gray-100 w-full h-120 z-50 p-5  rounded-t-3xl"
                drag="y"
                dragConstraints={{ top: 0, bottom: 1000 }}
                initial={{ y: "25%" }}
                animate={{ y: "0%" }}
                onDragEnd={(event, isOpen) => setIsOpen(!isOpen)}
              >
                <DescriptionPopUp
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                />
              </motion.div>
            </>
          ) : (
            <div></div>
          )} */}
          <button
            className=" flex flex-col justify-center fixed bottom-16 w-full center items-center flex buttonPagar items-center justify-center  text-white text-sm"
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
            <p className=" mt-1"> COMPRAR </p>
          </button>
        </div>
      ) : (
        <div className="absolute h-full w-full z-50  top-0">
          <button
            className="absolute z-50 right-0 bg-transparent md:right-10 h-4 w-4 bg-white text-center rounded text-black font-bold p-10"
            onClick={() => {
              setbigImg(!bigImg);
            }}
          >
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
                  height="650px"
                  width="450px"
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

export default ProductDetail;
