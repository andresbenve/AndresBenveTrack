import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { idChoosen } from "../../slices/basketSlice";
import { useRouter } from "next/router";

function Product({ id, title, price, description, category, image, video }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div>
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {/* Nota, El vídeo anda en el segundo Product feed, Me parece que no llega a cargar el vídeo cuando sea renderizar la página en el primer feed y por eso queda trabado el vídeo */}

        {/* {video.length > 0 ? (
          <div className="videoWrapperProductFeed">
            <iframe
              className=" mb-6"
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
            className="productImagewrapperBigImage rounded-lg mt-3"
            onClick={() => {
              dispatch(
                idChoosen({ id, title, price, description, image, video })
              );
              router.push(`/desktop/${id}`);
            }}
          >
            <Image
              src={i}
              height="700px"
              width="550px"
              className="productImage rounded-lg"
            />
          </div>
        ))}
      </Carousel>
      <div className="relative flex flex-col  bg-white  z-30 rounded-lg"></div>
      <h4 className="text-center text-blue-500	 text-sm my-2 line-clamp-1">
        {title}
      </h4>
    </div>
  );
}

export default Product;
