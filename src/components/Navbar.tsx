import Image from "next/image";
import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";

const Navbar = () => {
  return (
    <header className="py-5">
      <nav className="flex screen-max-width max-sm:justify-between max-sm:px-5">
        <Image alt="" src={appleImg} height={18} width={14} />

        <div className="flex flex-1 justify-center  max-sm:hidden text-gray-400">
          {navLists.map((navItem) => (
            <div key={navItem} className="px-5 hover:text-white">
              {navItem}
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-baseline">
          <Image alt="" src={searchImg} height={18} width={18} />
          <Image alt="" src={bagImg} height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
