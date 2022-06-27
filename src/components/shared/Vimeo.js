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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#29B6F6"
                d="M45,14.3c-0.2,4.1-3,9.6-8.6,16.6c-5.7,7.4-10.5,11-14.5,11c-2.4,0-4.5-2.2-6.2-6.7c-1.1-4.1-2.3-8.2-3.4-12.3c-1.3-4.5-2.6-6.7-4-6.7C8,16.2,6.9,16.7,5,18l-2-2.3c2.1-1.8,4-3.1,6-4.9c2.8-2.4,4.8-3.6,6.2-3.7c3.3-0.3,5.3,1.9,6,6.6c0.8,5.1,1.5,7.8,1.8,9c0.9,4.2,2,6.4,3.1,6.4c0.9,0,2.2-1.4,4-4.1c1.8-2.8,2.7-4.8,2.8-6.3c0.3-2.4-0.7-3.6-2.8-3.6c-1,0-2.1,0.5-3.2,0.9c2.1-6.7,6.1-10.2,11.9-10C43.2,6.1,45.2,8.9,45,14.3z"
              />
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
