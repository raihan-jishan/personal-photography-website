"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";

const WorkNavigation = () => {
  const [textColor, setTextColor] = useState("white");
  const [nav, setNav] = useState(false);

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

  // handleNav function
  const handleNav = () => {
    setNav(!nav);
  };

  // handleClose function
  const handleClose = () => {
    setNav(false);
  };

  const hoverClass =
    "hover:bg-white transition-all hover:text-black  hover:font-semibold";
  return (
    <div>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300  ">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          {/* brand logo */}

          {nav ? null : <Logo textColor={textColor} />}
          {/* close */}
          {/* navink lits */}
          <ul
            className={
              nav
                ? "  ease-in transition sm:flex bg-black/90 rounded-full max-lg:px-5 max-lg:shadow-2xl   max-lg:flex  max-lg:m-5"
                : "hidden sm:flex bg-black/90 rounded-full transition  ease-out"
            }
          >
            <div className={`p-4 rounded-l-full ${hoverClass} `}>
              <Link href={"#travel-photo"} onClick={handleClose}>
                Travel
              </Link>
            </div>
            <div className={`p-4 rounded-xl ${hoverClass} `}>
              <Link href={"#nature-photo"} onClick={handleClose}>
                Nature
              </Link>
            </div>
            <div className={`p-4 rounded-xl ${hoverClass} `}>
              <Link href={"#cars-photo"} onClick={handleClose}>
                Cars
              </Link>
            </div>
            <div className={`p-4 rounded-r-full ${hoverClass} `}>
              <Link href={"/contact"} onClick={handleClose}>
                more
              </Link>
            </div>
          </ul>
          {/* close */}

          {/* mobileButton */}
          <div
            onClick={handleNav}
            className={
              nav
                ? "max-lg:fixed block sm:hidden z-10 "
                : "block sm:hidden z-10"
            }
          >
            {nav ? (
              <AiOutlineClose size={35}   className="bg-black rounded-full"/>
            ) : (
              <AiOutlineMenu size={35} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* close */}
        </div>
      </div>
    </div>
  );
};

export default WorkNavigation;
