import React from "react";
import Image from "next/image";
import ListadoPopUp from "../mobile/ListadoPopUpMobile";

function Studio() {
  return (
    <div>
  
      <iframe height="140" className="w-full h-20 cortar2" src="https://rpp-peru.vercel.app/proyects.html">
  
</iframe>
  
{/*       
    
  <div className="flex justify-center bg-white benveHtmlDiv">
    <iframe className="benveHtml" src="https://hl-earning.vercel.app/" lazyloading frameborder="0"></iframe>
  </div>
  <div className="flex justify-center bg-white benveHtmlDiv">
    <iframe className="benveHtml" src="https://rpp-peru.vercel.app/homeMobile.html" lazyloading frameborder="0"></iframe>
  </div> */}
    <ListadoPopUp/>
      {/* <h1 className="text-left text-bold text-5xl ml-8">PORFILIO</h1>
      <h1>project 1</h1>
      <h1>project 2</h1>
      <h1>project 3</h1>
      <h1>project 4</h1>
      <h1>project 5</h1> */}
    </div>
  );
}

export default Studio;
