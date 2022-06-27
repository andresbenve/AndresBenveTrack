import React from "react";
import Image from "next/image";
import Header from "../desktop/HeaderDesktop";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import FooterCartInfoDesktop from "../desktop/FooterCartInfoDesktop";
import { useSession, signOut } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "../desktop/FooterDesktop";
import { useState, useEffect } from "react";
import router from "next/router";

function FootCart() {
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);

  return (
    <div>
      {items.length > 0 ? (
        <div className=" flex flex-col  flex-grow">
          <div className="flex flex-col p-5 space-y-10 bg-gray">
            {items.map((item, i) => (
              <FooterCartInfoDesktop
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
      ) : (
        <div className="flex  items-center justify-center w-full">
          <Image
            className=" mx-auto"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/CartBenveFinal.JPEG"
            height={500}
            width={500}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FootCart;
