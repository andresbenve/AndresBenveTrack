import React from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../slices/basketSlice";
import ProductDetailDesktop from "../../components/desktop/ProductDetailDesktop";
import FooterDesktop from "../../components/desktop/FooterDesktop";

function Details() {
  const ProductSelected = useSelector(selectId);

  return (
    <div>
      <ProductDetailDesktop
        key={ProductSelected.id}
        id={ProductSelected.id}
        image={ProductSelected.image}
        title={ProductSelected.title}
        price={ProductSelected.price}
        description={ProductSelected.description}
      />
      {/* <FooterDesktop /> */}
    </div>
  );
}

export default Details;
