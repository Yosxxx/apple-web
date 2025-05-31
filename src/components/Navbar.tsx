import Image from "next/image";
import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";

const Navbar = () => {
  return (
    <header className="py-5">
      <nav className="flex screen-max-width max-sm:justify-between max-sm:px-5">
        <Image
          src={appleImg}
          alt="Apple logo"
          width={18}
          height={18}
          priority
          className="h-auto"
        />

        <div className="flex flex-1 justify-center max-sm:hidden text-gray-400">
          {navLists.map((navItem) => (
            <div key={navItem} className="px-5 hover:text-white">
              {navItem}
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-baseline">
          <Image
            alt="Search"
            src={searchImg}
            width={18}
            height={18}
            className="h-auto"
          />
          <Image
            alt="Shopping bag"
            src={bagImg}
            width={18}
            height={18}
            className="h-auto"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
