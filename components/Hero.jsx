import { FaRegFolderClosed } from "react-icons/fa6";
import Button from "./ui/Button";
const Hero = ({ heading, message }) => {
 
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
    
          <Button
            text={"works"}
            path={'/work'}
            icon={<FaRegFolderClosed size={"25"} />}
            fontSize={"text-2xl"}
            radius={"rounded-2xl"}
            fontSizeInMobile={'text-4xl'}
            fontWeight={"font-semibold"}
          />
        
      </div>
    </div>
  );
};

export default Hero;
