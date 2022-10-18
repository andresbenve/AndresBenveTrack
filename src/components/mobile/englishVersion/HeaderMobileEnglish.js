import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../../slices/basketSlice";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky w-full top-0 z-40">
      <div className="flex items-center bg-white flex-grow  h-16">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          {/* <Image
            onClick={() => router.push("/")}
            className=""
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
            width={120}
            height={120}
            objectfit="contain"
          /> */}
          <div className="absolute text-black flex  text-xs space-x-2 mx-6 whitespace-nowrap">
            <div
              className="link pr-6"
              onClick={() =>
                router.push("https://calendly.com/andresbenve/pruebas")
              }
            >
              <p>Andres</p>
              <p className="font-extrabold md:text-sm">Benvenuto</p>
            </div>
          </div>
        </div>
      
        <div className="absolute text-black flex text-xs space-x-4 mx-6 whitespace-nowrap right-0">
          <div
            className="link pr-6"
            onClick={() =>
              router.push("https://calendly.com/andresbenve/pruebas")
            }
          >
            <p className="text-right">Schedule</p>
            <p className="font-extrabold md:text-sm text-right">Meet</p>
          </div>
        </div>
      </div>
      {/* {bottom} */}
    </header>
  );
}

export default Header;
