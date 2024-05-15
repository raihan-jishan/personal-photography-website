import Link from "next/link";

const Logo = ({textColor}) => {
  return (
    <div>
      <Link href={"/"}>
        <h1 style={{ color: `${textColor}` }} className="text-3xl font-bold">Captur</h1>
      </Link>
    </div>
  );
};

export default Logo;
