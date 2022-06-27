import { React } from "react";
import { useRouter } from "next/router";
import WhatsappMobile from "./WhatsappMobile";
import Instagram from "../shared/Instagram";
import Tiktok from "../shared/Tiktok";
import Calendar from "../shared/Calendar";

function FooterChat() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center  grid grid-cols-5 gap-0 flex flex-col flex-grow">
      <div className="col-span-2 text-center m-4 font-bold">CONCTACTO</div>
      <div
        onClick={() => router.push("https://wa.me/5491154844670")}
        className="flex items-center justify-center w-full font-bold buttonwhatsapp col-span-4 text-white "
      >
        ENVIAR WHATSAPP
      </div>
      <WhatsappMobile
        onClick={() => router.push("https://wa.me/5491154844670")}
        className="flex items-center justify-center w-full  ml-16"
      />
      <div
        onClick={() => router.push("https://calendly.com/andresbenve/pruebas")}
        className="flex items-center justify-end w-full font-bold buttonAgendarCita bg-black text-white col-span-4 flex  items-center justify-center w-full "
      >
        AGENDAR CITA
      </div>
      <Calendar
        onClick={() => router.push("https://calendly.com/andresbenve/pruebas")}
        className="flex items-center justify-center w-full mt-4 ml-16"
      />
      <div
        onClick={() => {
          router.push("https://www.instagram.com/benve_ba/");
        }}
        className="flex items-center justify-end w-full mt- 4 font-bold  col-span-4 flex buttonInstagram items-center justify-center w-full text-white"
      >
        LINK A IG
      </div>
      <Instagram
        onClick={() => {
          router.push("https://www.instagram.com/benve_ba/");
        }}
        className="flex items-center justify-center w-full  ml-16"
      />
      <div className="flex items-center justify-end w-full font-bold buttonAgendarCita col-span-4 flex  items-center justify-center w-full  text-white">
        BENVE TIKTOK
      </div>
      <Tiktok className="flex items-center justify-center w-full mt-4 ml-16" />
      {/* NOTA: Por si se quiere agregar  Google Maps acá */}
      {/* <div className="flex items-center justify-end w-full font-bold buttonGoogleMaps col-span-4 flex  items-center justify-center w-full  text-white">
        UBICACION EN GOOGLE MAPS
      </div>
      <GoogleMaps className="flex items-center justify-center w-full mt-4 ml-16" /> */}
      <div className="flex items-center justify-center w-full"></div>
    </div>
  );
}

export default FooterChat;
