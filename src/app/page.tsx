import RotatingImage from "@/components/RotatingImage";
import RotatingTagline from "@/components/RotatingTagline";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around h-screen bg-green-300 w-full">
      <div className="p-8 text-center md:text-left max-w-xl">
        <RotatingTagline />
      </div>
      <RotatingImage />
    </div>
  );
}
