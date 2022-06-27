import Image from "next/image";
import FooterDesktop from "./FooterDesktop";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { MenuIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { useState } from "react";
import BlurBg from "./BlurBgDesktop";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky w-full top-0 z-50">
      <div className="flex items-center bg-white flex-grow ">
        <div className="flex items-center flex-grow sm:flex-grow-0 ml-10">
          <Image
            onClick={() => router.push("/")}
            className="ml-16"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
            width={80}
            height={80}
            objectfit="contain"
          />
        </div>
        {/* {Search} */}

        {/* {right} */}
        <div className="absolute text-black flex  text-xs space-x-4 mx-6 whitespace-nowrap right-0 p-7">
          <div className="pr-10">
            <div>
              {session ? (
                <div>
                  <p> Hola, </p>
                  <p className="font-extrabold md:text-sm">
                    {session.user.name.split(" ")[0]}
                  </p>
                </div>
              ) : (
                <div onClick={() => signIn()}>
                  <p>Sign</p>
                  <p className="font-extrabold md:text-sm"> In</p>
                </div>
              )}
            </div>
          </div>
          <div
            className="link pr-10 mr-16"
            onClick={() =>
              router.push("https://calendly.com/andresbenve/pruebas")
            }
          >
            <p>Agendar</p>
            <p className="font-extrabold md:text-sm">Cita</p>
          </div>
          <div
            className="relative link flex items-center pr-14"
            onClick={() => router.push("desktop/checkout")}
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 ${
                                items.length >= 10 ? w-6 : w-4
                            }  text-center rounded-full text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
          </div>
          <div>
            <MenuIcon
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="h-10"
            />
          </div>
          {isOpen ? (
            <div>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="fixed relative z-50"
              >
                <XIcon className="fixed absolute right-0 top-0 h-10 w-10" />
              </div>
              <FooterDesktop className="z-50" />
            </div>
          ) : (
            []
          )}
        </div>
      </div>
      {/* {bottom} */}
    </header>
  );
}

export default Header;
