import Image from "next/image";
import Link from "next/link";
import { TabIcon } from "./TabIcon";

type NavbarProps = {
  logoSrc?: string;
  brandName?: string;
};

export const Navbar = ({
  logoSrc = "/next.svg",
  brandName = "Kaizen",
}: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md max-w-5xl w-full border rounded-lg h-14 flex items-center px-6 text-black relative">
      {/* LEFT */}
      <div className="flex-1">
        <TabIcon className="text-neutral-900" />
      </div>

      {/* CENTER */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <Image src={logoSrc} alt="logo" width={28} height={28} />
        <span className="font-semibold">{brandName}</span>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-end">
        <button className="px-4 py-2 text-white bg-black rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};
