import React from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../slices/basketSlice";
import ProductDetailMobile from "../../components/mobile/ProductDetailMobile";
import FooterMobile from "../../components/mobile/FooterMobile";

function Details() {
  const ProductSelected = useSelector(selectId);

  return (
    <div>
      <ProductDetailMobile
        key={ProductSelected.id}
        id={ProductSelected.id}
        image={ProductSelected.image}
        title={ProductSelected.title}
        price={ProductSelected.price}
        description={ProductSelected.description}
      />
      <FooterMobile />
    </div>
  );
}

export default Details;
