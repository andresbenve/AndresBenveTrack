import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";
import { idChoosen } from "../../slices/basketSlice";
import router from "next/router";

function CheckoutProduct({ id, title, price, description, image }) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-5">
      <Image
        onClick={() => {
          dispatch(idChoosen({ id, title, price, description, image }));
          router.push(`/mobile/${id}`);
        }}
        src={image[0]}
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* Middle */}
      <div
        onClick={() => {
          dispatch(idChoosen({ id, title, price, description, image }));
          router.push(`/mobile/${id}`);
        }}
        className="col-span-3 mx-5"
      >
        <p>{title}</p>
        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
        <p>{price} "$"</p>
      </div>
      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-center text-white ">
        <button
          className="button"
          onClick={() => {
            dispatch(removeFromBasket({ id }));
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
