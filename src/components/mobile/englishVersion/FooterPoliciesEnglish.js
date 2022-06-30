import React from "react";
import router from "next/router";
import GoogleMaps from "../../shared/GoogleMaps";
import Whatsapp from "../../shared/Whatsapp";
import Image from "next/image";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
function FooterPolicies() {
  return (
    // <div className="bg-gray-100 ">
    <div>
      {/* <div className="col-span-5">.</div>
      <div className="col-span-5">.</div> */}
      <div class="flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow bg-gray-700">
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5  text-white m-4 mb-0 mt-6">
          TERMS & CONDITIONS
        </div>
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0   ">
          CURRENT JOBS
        </div>
        <div className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0">
          MY INTERESTS
        </div>
        <div
          onClick={() => router.push("https://goo.gl/maps/G7UGC6o6U33C6Q8S9")}
          className="flex items-center justify-center  font-bold buttonGoogleMaps col-span-5 text-white m-4 mb-0"
        >
          WHERE I LIVE ❤️ (GOOGLE MAPS)
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
        <div className="col-span-5  text-xs text-white mt-4 text-center">
          Copyright © 2022 Andres Benvenuto, All Rights Reserve
          <p className="text-white">Designer & Developer</p>
        </div>
        <div className="flex items-center justify-center col-span-5  text-white mt-4 mb-2">
          <ChevronUpIcon
            className="h-10 w-10"
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
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
