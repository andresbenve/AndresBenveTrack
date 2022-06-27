import { Menu } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
} //  <MyLink href="/profile">Profile</MyLink> Escribir asi el el link abajo

export default function Whatsapp() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("https://wa.me/5491154844670")}>
      <Menu as="div" className="relative inline-block text-left order-last">
        <div>
          <Menu.Button className=" inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-90 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="50px"
              height="50px"
            >
              {" "}
              <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
            </svg>
          </Menu.Button>
        </div>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}
