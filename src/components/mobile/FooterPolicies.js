import React from "react";
import router from "next/router";
import GoogleMaps from "../shared/GoogleMaps";
import Whatsapp from "../shared/Whatsapp";
import Image from "next/image";

function FooterPolicies() {
  return (
    // <div className="bg-gray-100 ">
    <div>
      {/* <div className="col-span-5">.</div>
      <div className="col-span-5">.</div> */}
      <div className="flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow ">
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5  text-white m-4 mb-0 mt-6">
          BASES Y CONDICIONES
        </div>
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0   ">
          ENVIOS
        </div>
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0">
          SOBRE BENVE
        </div>
        <div
          onClick={() => router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")}
          className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0"
        >
          ABRIR SHOWROOM EN GOOGLE MAPS
        </div>
        {/* <GoogleMaps
          onClick={() => router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")}
          className="flex items-center justify-center w-full  ml-16"
        /> */}
        {/*
          NOTA: En caso de que a ANA le llegue a gustar con el logo de Google Maps
           <div
          onClick={() => router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")}
          className="flex items-center justify-center w-full font-bold buttonGoogleMaps col-span-4 text-white m-4 "
        >
          SHOWROOM EN GOOGLE MAPS
        </div>
        <GoogleMaps
          onClick={() => router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")}
          className="flex items-center justify-center w-full  ml-16"
        /> */}
        {/* <div className="col-span-5 mt-10">
          <Image
            className=" productImageFullWidth "
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/JazminChebarFooter.png"
            height="600"
            width="700"
            objectfit="contain"
          />
        </div> */}
        <div className="col-span-5 text-black  mt-4 text-center">
          © Benve Ba, All Rights Reserve
        </div>

        <div className="col-span-5 text-white">.</div>

        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
        <div className="text-white">f</div>
      </div>
    </div>
  );
}

export default FooterPolicies;
