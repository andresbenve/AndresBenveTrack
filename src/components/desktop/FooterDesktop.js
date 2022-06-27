import { React, useState } from "react";
import Image from "next/image";
import { MenuIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { BookOpenIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { motion } from "framer-motion";
import ListadoPopUp from "../desktop/ListadoPopUpDesktop";
import FootMenu from "../desktop/FootCartDesktop";
import FooterSearch from "../desktop/FooterSearchDesktop";
import BlurBg from "./BlurBgDesktop";

function Footer({ products }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [isOpen, setIsOpen] = useState(true);

  return (
    // https://stackoverflow.com/questions/68590184/tailwind-css-make-footer-always-stay-at-bottom-of-page
    // por ahora lo que mas me sirvio es la respuesta de viveks (no funciona)

    <footer className="  right-0 h-full  bg-gray-100 grid grid-cols-5  content-evenly">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 1000 }}
        initial={{ y: "25%" }}
        animate={{ y: "0%" }}
        className=" top-0 fixed "
      >
        <BlurBg className="left-0" />
      </motion.div>
      <XIcon
        onClick={() => setIsOpen(!isOpen)}
        objectfit="contain"
        className="h-12 pl-4 cursor-pointer"
        strokeWidth="0.5"
      />

      <motion.div
        className="bottom-0 fixed bg-gray-100  h-full  p-10 "
        drag="y"
        dragConstraints={{ top: 0, bottom: 1000 }}
        initial={{ y: "25%" }}
        animate={{ y: "0%" }}
        onDragEnd={(event, isOpen) => {
          setIsOpen(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
        }}
      >
        <ListadoPopUp />
      </motion.div>
    </footer>
  );
}

export default Footer;
