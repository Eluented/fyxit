"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Home() {



  return (
    <>
      <Navbar />
      {/* Video Background Container */}
      <div className="relative h-screen w-full overflow-hidden bg-amber-700">
  


        {/* Content Container */}
        <div className="relative z-20  h-full w-full flex  items-center justify-center">
          <div className=" max-w-[1700px] text-center  font-heading">
            {" "}
            {/* <RotatingTagline /> */}
            <h1 className="text-8xl uppercase  text-shadow-black text-shadow-md">
              Find Your Local {" "}
            </h1>
 
            <div className="flex items-center justify-center">
              {" "}
              <h1 className="text-8xl uppercase  text-fyx-yellow backdrop-blur-2xl text-shadow-black text-shadow-sm  px-4">
                Tradesperson
              </h1>
            </div>

          </div>

          <div className="absolute bottom-0 pb-2 flex flex-col justify-center items-center">
            <div>
              <p className="font-poppins font-semibold text-shadow-black text-shadow-md text-sm pb-0.5 tracking-widest">
                Scroll down to see more
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-8 text-shadow-black text-shadow-xs"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Informatics section */}



    </>
  );
}
