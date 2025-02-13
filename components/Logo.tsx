// Logo Component
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="50"
        width="50"
        alt="The Logo"
        className="sm:w-16 sm:h-16 w-12 h-12"
      />
      <span className="text-xl font-semibold text-primary-100 xs:block hidden">
        Crypto-Sight
      </span>
    </Link>
  );
}

export default Logo;
