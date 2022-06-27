import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";

function CheckoutProduct({ id, title, price, description, image }) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-5">
      <Image src={image[0]} height={200} width={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <p>{price} "$"</p>
      </div>
      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-items-end">
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
