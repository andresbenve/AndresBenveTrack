import { React, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactIcon from '../../shared/ReactIcon'
import Next from '../../shared/Next'
import HtmlIcon from '../../shared/HtmlIcon'

function ListadoPopUp() {
  const router = useRouter();
  const [isDressUp, setisDressUp] = useState(false);
  const [isMerchandising, setisMerchandising] = useState(false);
  const [isBags, setisBags] = useState(false);
  const [isArt, setisArt] = useState(false);

  if (!isDressUp && !isMerchandising && !isBags && !isArt) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">PROJECTS</div>
        <div
          onClick={() => router.push(`${process.env.ACTUAL}/mobile/hlearning`)}
          className="flex col-span-2 items-center justify-center w-full font-bold   "
        >
          React <ReactIcon/>
          
        </div>
        {/* <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" /> */}
        <div
          onClick={() => router.push(`${process.env.ACTUAL}/mobile/benve`)}
          className="flex col-span-2 items-center justify-center w-full mt- 4   font-bold "
        >
          Next <Next/>
        </div>
        {/* <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" /> */}
        <div
          onClick={() => router.push(`${process.env.ACTUAL}/mobile/rpp`)}
          className="flex col-span-2 items-center justify-center w-full font-bold  "
        >
          HTML <HtmlIcon/> 
        </div>
        {/* <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" /> */}
        <div
          onClick={() => setisBags(!isBags)}
          className="flex col-span-2 items-center justify-center w-full font-bold   text-sm"
        >
          React Native<ReactIcon/>
        </div>
        {/* <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" /> */}
        <div className="flex items-center justify-center w-full"></div>

      </div>
    );
  } else if (isDressUp) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">DRESS UP</div>
        <div
          onClick={() => setisDressUp(!isDressUp)}
          className="flex items-center justify-end w-full font-bold "
        >
          CORTAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" />
        <div
          onClick={() => setisMerchandising(!isMerchandising)}
          className="flex items-center justify-end w-full mt- 4 font-bold "
        >
          LARGAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold">
          ESTAMPADAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div
          onClick={() => setisBags(!isBags)}
          className="flex items-center justify-end w-full font-bold "
        >
          ARTISTICAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-center w-full"></div>

        <div className="flex col-span-2 items-center justify-center">
          <div className="flex col-span-2 items-center justify-center">
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else if (isMerchandising) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">EVERY DAY</div>
        <div
          onClick={() => setisDressUp(!isDressUp)}
          className="flex items-center justify-end w-full font-bold "
        >
          BUZOS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" />
        <div
          onClick={() => setisMerchandising(!isMerchandising)}
          className="flex items-center justify-end w-full mt- 4 font-bold "
        >
          GORROS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold">
          CARTERAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold "></div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-center w-full"></div>

        <div className="flex col-span-2 items-center justify-center">
          <div className="flex col-span-2 items-center justify-center">
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else if (isBags) {
    // ESTE ES EL DE LOS ZAPATOS
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">BAGS</div>
        <div
          onClick={() => setisDressUp(!isDressUp)}
          className="flex items-center justify-end w-full font-bold "
        >
          PLAYERAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" />
        <div
          onClick={() => setisMerchandising(!isMerchandising)}
          className="flex items-center justify-end w-full mt- 4 font-bold "
        >
          CIUDAD
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold">
          MONTANA
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div
          onClick={() => setisBags(!isBags)}
          className="flex items-center justify-end w-full font-bold "
        >
          CAMPO
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-center w-full"></div>

        <div className="flex col-span-2 items-center justify-center">
          <div className="flex col-span-2 items-center justify-center">
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else if (isArt) {
    // ESTE ES EL DE LOS ZAPATOS
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">ART</div>
        <div
          onClick={() => setisDressUp(!isArt)}
          className="flex items-center justify-end w-full font-bold "
        >
          ESCULTURAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" />
        <div
          onClick={() => setisMerchandising(!isMerchandising)}
          className="flex items-center justify-end w-full mt- 4 font-bold "
        >
          TELAS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold">
          MATERIALES
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div
          onClick={() => setisBags(!isBags)}
          className="flex items-center justify-end w-full font-bold "
        >
          EXTRA
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-center w-full"></div>

        <div className="flex col-span-2 items-center justify-center">
          <div className="flex col-span-2 items-center justify-center">
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListadoPopUp;

// BackUp de por que pushie muchos cambios son tanta certeza

{
  /*
import { React, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { CamisasCortas } from "../pages/CamisasCortas";
import Image from "next/image";
import { useRouter } from "next/router";

function ListadoPopUp() {
  const router = useRouter();
  const [isCamisas, setIsCamisas] = useState(false);
  const [isZapatos, setIsZapatos] = useState(false);
  const [isSweater, setIsSweater] = useState(false);

  if (!isCamisas && !isZapatos && !isSweater) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col flex-grow">
        <div className="col-span-2 text-center m-4 font-bold">PROYECTS</div>
        <div
          onClick={() => setIsCamisas(!isCamisas)}
          className="flex items-center justify-end w-full font-bold "
        >
          DRESS UP
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full  ml-16 h-6 w-5" />
        <div
          onClick={() => setIsZapatos(!isZapatos)}
          className="flex items-center justify-end w-full mt- 4 font-bold "
        >
          MERCHANDISING
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-end w-full font-bold">
          BAGS
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div
          onClick={() => setIsSweater(!isSweater)}
          className="flex items-center justify-end w-full font-bold "
        >
          ART
        </div>
        <ChevronRightIcon className="flex items-center justify-center w-full mt-4 ml-16 h-6 w-5" />
        <div className="flex items-center justify-center w-full"></div>

        <div className="flex col-span-2 items-center justify-center">
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else if (isCamisas && !isZapatos && !isSweater) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col  flex-grow">
        <ChevronLeftIcon
          className="h-6 w-5"
          onClick={() => setIsCamisas(false)}
        />
        <div className="col-span-2 text-center mb-8">CAMISAS</div>
        <div className="ml-3">CAMISAS XL</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">CORTAS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">ESTAMPADOS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3"></div>
        <ChevronRightIcon className="ml-16 h-6 w-5" stroke="white" />
        <div className="ml-3"></div>
        <ChevronRightIcon className="ml-16 h-6 w-5" stroke="white" />
        <div className="flex flex-row  col-span-2 text-center mt-0 ">
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else if (!isCamisas && isZapatos && !isSweater) {
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col  flex-grow">
        <div className="col-span-2 text-center m-3">PROYECTS</div>
        <div onClick={() => setIsCamisas(!isCamisas)} className="ml-3">
          CAMISAS
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div onClick={() => setIsZapatos(!isZapatos)} className="ml-3">
          ZAPATOTOTES
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">CARTERAS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div onClick={() => setIsSweater(!isSweater)} className="ml-3">
          SWEATERS
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">CAMPERAS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="flex flex-row  col-span-2 text-center mt-2 ">
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  } else {
    // ESTE ES EL DE LOS ZAPATOS
    return (
      <div className="grid grid-cols-2 gap-2 flex flex-col  flex-grow">
        <div className="col-span-2 text-center m-3">PROYECTS</div>
        <div onClick={() => setIsCamisas(!isCamisas)} className="ml-3">
          CAMISAS
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div onClick={() => setIsZapatos(!isZapatos)} className="ml-3">
          ZAPATOS
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">CARTERAS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div onClick={() => setIsSweater(!isSweater)} className="ml-3">
          SWEATERAZPS
        </div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="ml-3">CAMPERAS</div>
        <ChevronRightIcon className="ml-16 h-6 w-5" />
        <div className="flex flex-row  col-span-2 text-center mt-2 ">
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
          <div>
            <Image
              className=""
              src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
              width={100}
              height={100}
              objectfit="contain"
            />
          </div>
        </div>
      </div>
    );
  }
}

// function ListadoPopUp() {
//   return (
//     <div className="flex flex-col flex-grow">
//       <div className="m-6 text-center">PROYECTS</div>
//       <div className="m-1 flex flex-row ">
//         COLLECION <ChevronRightIcon className=" h-6 w-5 " />
//       </div>

//       <div className="m-1">ZAPATOS</div>
//       <div className="m-1">CARTERAS</div>
//       <div className="m-1">SMALL LEATHER ITEMS</div>
//       <div className="m-1">DENIM</div>
//       <div className="mt-7 text-center">A</div>
//     </div>
//   );
// }
export default ListadoPopUp;

*/
}
