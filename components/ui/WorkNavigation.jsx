"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const WorkNavigation = () => {  
    const [textColor, setTextColor] = useState("white");
   
  
    // useEffect hook
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
            setTextColor("#000000");
        } else {  
          setTextColor("#ffffff");
        }
      };
      window.addEventListener("scroll", changeColor);
    }, []);
  const hoverClass =
    "hover:bg-white transition-all hover:text-black  hover:font-semibold";
  return (
    <div>
     
      <div 
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 " >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
          {/* brand logo */} 

            <Logo textColor={textColor}/> 
          {/* close */}
          {/* navink lits */}
          <ul className="hidden sm:flex bg-black/90 rounded-full">
            <div className={`p-4 rounded-l-full ${hoverClass} `}>
              <Link href={"#travel-photo"}>Travel</Link>
            </div>
            <div className={`p-4 rounded-xl ${hoverClass} `}>
              <Link href={"#nature-photo"}>Nature</Link>
            </div>
            <div className={`p-4 rounded-xl ${hoverClass} `}>
              <Link href={"#cars-photo"}>Cars</Link>
            </div>
            <div className={`p-4 rounded-r-full ${hoverClass} `}>
              <Link href={"/contact"}>more</Link>
            </div>
          </ul>
          {/* close */}
        </div>
      </div>
    </div>
  );
};

export default WorkNavigation;
