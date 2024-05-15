import Link from "next/link";

const Button = ({
  targetName,
  path,
  text,
  textColor,
  fontSize,
  radius,
  fontWeight,
  icon,
  background,
  fontSizeInMobile, 
}) => {
  return (
    <Link
      href={path}
      target={targetName}
      className={`text-center flex gap-3 px-16 py-[0.7rem] border hover:bg-gray-200 transition-all hover:scale-95  hover:text-black ${fontSize} ${fontWeight} ${radius} ${textColor} ${background} max-lg:${fontSizeInMobile}`}
    >
      {icon} {text}
    </Link>
  );
};

export default Button;
