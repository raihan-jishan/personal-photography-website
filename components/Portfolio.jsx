import Image from "next/image";
const Portfolio = ({ image1, image2, image3, image4, image5, pageText , sectionId}) => {
  const byDefaultStyling =
    "rounded-xl hover:scale-95 transition-all cursor-pointer";
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center" id={sectionId}>
      <h1 className="font-bold   p-4 text-5xl">{pageText}</h1>

      <div className="grid mt-5  grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full cols-span-2 md:col-span-3 row-span-2">
          <Image
            className={byDefaultStyling}
            src={image1}
            alt="image not found!"
            layout="responsive"
            width={"677"}
            height={"451"}
          />
        </div>

        <div className="w-full h-full">
          <Image
            className={byDefaultStyling}
            src={image2}
            alt="image not found!"
            layout="responsive"
            width={"215"}
            height={"217"}
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            className={byDefaultStyling}
            src={image3}
            alt="image not found!"
            width={"215"}
            height={"217"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={image4}
            className={byDefaultStyling}
            alt="image not found!"
            width={"215"}
            height={"217"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={image5}
            className={byDefaultStyling}
            alt="image not found!"
            width={"215"}
            height={"217"}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
