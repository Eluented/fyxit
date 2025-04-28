import Navbar from "@/components/Navbar";
import RotatingTagline from "@/components/RotatingTagline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center  md:justify-around max-w-[1330px] mx-auto h-screen w-full">
        <div className="p-8 w-full md:max-w-md text-center md:text-left">
          {/* Text container with fixed height */}
          <div className="min-h-[160px] md:min-h-[300px] flex flex-col justify-between">
            <div className="h-full flex items-center">
              <RotatingTagline />
            </div>
            {/* Button positioned below */}
            <div className="mt-4 md:mt-6 w-full">
              <button className="bg-fyx-yellow text-white px-12 py-4  rounded-lg text-3xl font-semibold hover:bg-opacity-90 transition-all">
                Get Fyxit Now
              </button>

              <div className="flex gap-4 justify-between mt-[-40px] ">
                <a
                  href="YOUR_APP_STORE_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[200px] relative"
                >
                  <Image
                    src="/images/download-on-the-app-store-apple-logo-svgrepo-com.svg"
                    alt="Download on the App Store"
                    fill
                  />
                </a>

                <a
                  href="YOUR_GOOGLE_PLAY_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[200px] relative"
                >
                  <Image
                    src="/images/google-play-badge-logo-svgrepo-com.svg"
                    alt="Get it on Google Play"
                    fill
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[100vh]  md:w-6/10 overflow-hidden rounded-none md:rounded-xl">
          <div className="absolute w-full h-full">
            <Image
              src="/images/tradesman3.png"
              alt="Fyxit tradesperson"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-screen">text</div>
    </>
  );
}
