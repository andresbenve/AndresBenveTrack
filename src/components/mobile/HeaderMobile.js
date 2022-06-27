import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className=" w-full top-0 z-50">
      <div className="flex items-center bg-white flex-grow ">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            className=""
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
            width={120}
            height={120}
            objectfit="contain"
          />
        </div>
        {/* {Search} */}

        {/* {right} */}
        <div className="absolute text-black flex  text-xs space-x-4 mx-6 whitespace-nowrap right-0 p-7">
          <div>
            <div>
              {/* {session ? (
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
              )} */}
            </div>
          </div>
          <div
            className="link pr-6"
            onClick={() =>
              router.push("https://calendly.com/andresbenve/pruebas")
            }
          >
            <p>Agendar</p>
            <p className="font-extrabold md:text-sm">Cita</p>
          </div>
          <div
            className="relative link flex items-center "
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-white text-center rounded text-black font-bold">
              0{/* {items.length} */}
            </span>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>
      {/* {bottom} */}
    </header>
  );
}

export default Header;
