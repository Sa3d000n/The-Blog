"use client";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const isActive = pathname === "/";

  return (
    <header className="p-2 px-8 flex justify-between lg:px-28 lg:py-8">
      {isOpened ? (
        <nav className="flex flex-col  justify-center items-center w-full">
          <p className="mb-9">Saad Abdelfattah</p>
          <ul className="flex flex-col gap-5">
            <li className={isActive ? "text-blue-500" : ""}>
              {" "}
              <Link href="/" className={isActive ? "text-blue-500" : ""}>
                Blog
              </Link>{" "}
            </li>
            <li>Projects</li>
            <li>About</li>
            <li>Newsletter</li>
            <li>
              {" "}
              <DarkModeToggle />
            </li>
          </ul>
          <span
            className=" mt-9 cursor-pointer"
            onClick={() => setIsOpened(false)}
          >
            ❌
          </span>
        </nav>
      ) : (
        <>
          <p>Saad AbdelFattah</p>
          {/* <svg
           
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
          <div className="block md:hidden">
            {" "}
            <FontAwesomeIcon
              icon={faBars}
              className="size-5 cursor-pointer hidden"
              onClick={() => setIsOpened(true)}
            />
          </div>
        </>
      )}
      <nav className="hidden md:block w-auto ">
        <ul className="flex flex-row items-center justify-around gap-3.5 lg:gap-10">
          <Link href="/" className={isActive ? "text-blue-500" : ""}>
            Blog
          </Link>
          <li>Projects</li>
          <li>About</li>
          <li>Newsletter</li>
          <li>
            {" "}
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
