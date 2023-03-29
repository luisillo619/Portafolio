import React from "react";
import Header from "../Header";
import Link from "next/link";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

export default function Layout({ children }) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      {children}

      <footer className="fixed bottom-14 right-9">
        <Link href="#hero">
          <div className="w-[40px] h-[40px] rounded-md flex justify-center items-center transition-all duration-300 ease-in-out border-none cursor-pointer hover:translate-y-[-15px]" >
            <ArrowSmallUpIcon className="w-14 h-16 text-[#F7AB0A]" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
