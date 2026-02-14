import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col gap-5 min-h-screen justify-center text-center items-stretch">
    <div className="relative">
    <h2 className="text-4xl font-bold">Next js Fetching and Rendering</h2>
  <h2 className="text-8xl absolute inset-0 -top-20 opacity-10 font-medium">Fetching rendering & styling</h2>



    </div>
    <div className="">
    <button className="btn">Let,s Explore</button>
    </div>
   </div>
  );
}
