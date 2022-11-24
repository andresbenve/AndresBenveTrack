import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/outline";



function Studio() {
  const router = useRouter()
  return (
    <div>

    <div onClick={() => router.push(`${process.env.ACTUAL}/desktop/rpp`)} className="fixed z-50 bottom-0 right-0 buttonPagar w-1/2 ">Siguiente proyecto →</div>
    
    {/* <div onClick={() => router.push(`${process.env.ACTUAL}/mobile/hlearning')} className="fixed  z-50 bottom-0  buttonPagar menuCssProyectos ">Menu {<MenuIcon className="h-4 w-4 ml-1"/>} </div>
     */}

    <div onClick={() => router.push(`${process.env.ACTUAL}`)} className="fixed flex items-center justify-center z-50 bottom-0 w-1/2 buttonPagar ">← volver a porfolio</div>
    

    <div className="flex justify-center bg-white benveHtmlDivDesktop">
    <iframe className="benveHtmlDesktop" src="https://hl-earning.vercel.app/" lazyloading frameborder="0"></iframe>
  </div>
  </div>
  );
}

export default Studio;
