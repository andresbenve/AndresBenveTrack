import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"



function CenterModeMobileEnglish() {
  return (
    <div>
    
   
    <button
      className=" flex flex-col justify-center w-full center items-center flex buttonPagar items-center justify-center  text-white text-sm mb-20"
    >
      <p> DOWNLOAD CURRICULUM (PDF)</p>
      <div className="App">
      <header className="App-header" height={100}>
        <div>
          
        </div>
      </header>
      <div className="mt-4">
        <img src="https://res.cloudinary.com/dvev3rzaw/image/upload/v1666104059/Screen_Shot_2022-10-18_at_11.40.35_qzpsub.png" alt="screen" height={700} />
        
      </div>
    </div>
    </button>
</div>
  );
}

export default CenterModeMobileEnglish;
