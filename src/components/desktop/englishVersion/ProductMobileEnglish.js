// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { useDispatch } from "react-redux";
// import { addToBasket } from "../slices/basketSlice";
// import Image from "next/image";
// import { idChoosen } from "../slices/basketSlice";
// import { useRouter } from "next/router";

// function Product({ id, title, price, description, category, image }) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const addItemToBusket = () => {
//     const product = {
//       id,
//       title,
//       price,
//       description,
//       category,
//       image,
//     };

//     //Sending the product as an action to the REDUX store..the basket slice
//     dispatch(addToBasket(product));
//   };

//   return (
//     <div
//       onClick={() => {
//         dispatch(idChoosen({ id, title, price, description, image }));
//         router.push(`/${id}`);
//       }}
//       className="mb-6"
//     >
//       <Carousel
//         autoPlay={false}
//         infiniteLoop
//         showArrows={false}
//         showStatus={false}
//         showIndicators={true}
//         showThumbs={false}
//       >
//         <div className="productImagewrapper rounded-lg mt-3">
//           <img src={image} className="productImage rounded-lg" />
//         </div>
//         <div className="productImagewrapper rounded-lg mt-3">
//           <img src={image} className="productImage rounded-lg" />
//         </div>
//         <div className="productImagewrapper rounded-lg mt-3">
//           <img src={image} className="productImage rounded-lg" />
//         </div>
//       </Carousel>
//       <div className="relative flex flex-col  bg-white  z-30 rounded-lg"></div>
//       <h4 className="text-center text-sm my-2 line-clamp-1">{title}</h4>
//     </div>
//   );
// }

// export default Product;

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { idChoosen } from "../../../slices/basketSlice";
import { useRouter } from "next/router";

function Product({ id, title, price, description, category, image, video }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div>
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {/* Nota, El vídeo anda en el segundo Product feed, Me parece que no llega a cargar el vídeo cuando sea renderizar la página en el primer feed y por eso queda trabado el vídeo */}

        {/* {video.length > 0 ? (
          <div className="videoWrapperProductFeed">
            <iframe
              className="mb-6"
              height={600}
              src="https://player.vimeo.com/video/710975462?background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          []
        )} */}
        {image.map((i) => (
          <div
            key={id}
            className="productImagewrapper mt-6"
            onClick={() => {
              dispatch(
                idChoosen({ id, title, price, description, image, video })
              );
              router.push(`/mobile/${id}`);
            }}
          >
            <Image
              src={i}
              height="430px"
              width="300px"
              className="productImage"
            />
          </div>
        ))}
      </Carousel>
      {/* <div className="relative flex flex-col  bg-white  z-30 rounded-lg"></div> */}
      <div className="text-center text-black-500 text-xs  line-clamp-1 mt-2">
        {title}
      </div>
    </div>
  );
}

export default Product;
