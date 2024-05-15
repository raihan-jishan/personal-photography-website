"use client";
import { navigationData } from "@/utils/constance";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./ui/Logo";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  // handleNav function
  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect hook
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  // initialize useRouter hook
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* brand logo */}
        <Logo textColor={textColor} />
        {/* close */}
        {/* navink lits */}
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {navigationData.map((data) => (
            <div className="p-4" key={data.id}>
              <Link
                key={data.id}
                href={data.path}
               
              >
                {data.name}
              </Link>
            </div>
          ))}
        </ul>
        {/* close */}

        {/* mobileButton */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* close */}

        {/* Mobilemenu  */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 ring-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] ring-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-50">
              <Link href={"/"}>Home</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-50">
              <Link href={"/"}>Gallery</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-50">
              <Link href={"/"}>Work</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-50">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* close */}
      </div>
    </div>
  );
};

export default Navbar;
