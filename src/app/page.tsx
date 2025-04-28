"use client";
import Navbar from "@/components/Navbar";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef(null);

  // Optional: Handle video autoplay on iOS
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true; // Required for autoplay on many browsers
      videoRef.current.playsInline = true; // Required for iOS
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Video Background Container */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/8965388-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <Image
            src="/images/tradesman.png"
            alt="Tradespeople at work"
            fill
            className="object-cover"
          />
        </video>

        {/* Content Container */}
        <div className="relative z-20  h-full w-full flex  items-center justify-center">
          <div className=" max-w-[1700px] text-center  ">
            {" "}
            {/* <RotatingTagline /> */}
            <h1 className="text-8xl uppercase font-sans text-shadow-black text-shadow-md">
              Empowering Tradespeople{" "}
            </h1>
            <h1 className="text-8xl uppercase font-sans text-shadow-black text-shadow-md">
              Show Your Craft
            </h1>
            <div className="flex items-center justify-center">
              {" "}
              <h1 className="text-8xl uppercase font-sans text-fyx-yellow backdrop-blur-2xl text-shadow-black text-shadow-sm  px-4">
                Get Hired.
              </h1>
            </div>
            <div className="pt-8 font-mono text-xl tracking-tight text-shadow-black text-shadow-md font-semibold">
              <p>
                Fyxit is a social platform designed to bridge the gap between
                craftsmanship and community — helping professionals grow their
                brand, share their work, and gain the recognition they deserve.
                Stay tuned and be part of the future of trades!
              </p>
              <p></p>
            </div>
          </div>

          <div className="absolute bottom-0 pb-2 flex flex-col justify-center items-center">
            <div><p className="font-mono font-semibold text-shadow-black text-shadow-xs text-sm pb-0.5">Scroll down to see more</p></div>
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
    </>
  );
}
