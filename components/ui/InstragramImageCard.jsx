import Image from "next/image";
// import { FaInstagram } from "react-icons/fa";

const InstragramImageCard = ({ postImages, title, tag1, tag2, tag3}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
      <Image
        className="w-full rounded-xl"
        width={"400"}
        height={"400"}
        src={postImages}
        alt={"image not found!"}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-95 transition-all ">
          {!tag1 ? "" : <>
          #
          </>}{tag1}
        </span>
        <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-95 transition-all">
        {!tag2 ? "" : <>
          #
          </>}{tag2}
        </span>
        <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-95 transition-all">
        {!tag3 ? <span className="text-lg  ">no tags</span> : <>
          #
          </>}{tag3}
        </span>
      </div>
    </div>
  );
};

export default InstragramImageCard;
