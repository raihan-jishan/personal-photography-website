"use client";
import { PostImages } from "@/utils/constance";
import { FaInstagram } from "react-icons/fa";
import Button from "./ui/Button";
import InstragramImageCard from "./ui/InstragramImageCard";

const Instragram = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto text-center py-24">
        <p className="text-[2.5rem] font-bold">Follow me on Instragram</p>

        <p>@Captur</p>
        {/* grid images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 max-lg:grid-cols-1">
          {/* postImage map */}

          {PostImages.map((post, index) => (
            <InstragramImageCard
              key={index}
              postImages={post.imageUrl}
              title={post.title}
              tag1={post.tag1}
              tag2={post.tag2}
              tag3={post.tag3}
            />
          ))}
          {/* close */}
        </div>
      </div>
      {/* ask for more images button */}
     <div className="flex items-center justify-center  m-2">
     <Button
        background={'bg-gradient-to-r from-amber-500 to-pink-500'}
        text={"Ask for more image"}
        fontSize={"text-2xl"}
        fontWeight={"font-semibold"}
        radius={'rounded-full'}
        path={"https://www.instagram.com"}
        targetName={"_blank"}
        icon={<FaInstagram size={35} />}
      />
     </div>

      {/* close */}
    </>
  );
};

export default Instragram;
