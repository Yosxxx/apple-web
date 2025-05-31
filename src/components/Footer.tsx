import Link from "next/link";

const Footer = () => {
  return (
    <footer className="screen-max-width text-sm text-gray-500 mb-10 max-md:p-3">
      <div>
        <p>
          More ways to shop:{" "}
          <Link href={"#"} className="text-blue-400 underline">
            Find an Apple Store
          </Link>{" "}
          or{" "}
          <Link href={"#"} className="text-blue-400 underline">
            other retailer
          </Link>{" "}
          near you.
        </p>
        <p>Or call 000800-040-1966.</p>
      </div>
      <hr className="my-5" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 text-sm">
        <p className="text-center md:text-left">
          Credits to:{" "}
          <Link
            href="https://www.youtube.com/watch?v=RbxHZwFtRT4&t=13292s"
            className="text-blue-400 underline"
          >
            JavaScript Mastery
          </Link>
        </p>

        <div className="flex flex-col md:flex-row gap-2 md:gap-x-4 text-center max-md:text-left">
          <Link href="#">Privacy</Link>
          <span className="hidden md:inline">|</span>
          <Link href="#">Terms of Use</Link>
          <span className="hidden md:inline">|</span>
          <Link href="#">Sales Policy</Link>
          <span className="hidden md:inline">|</span>
          <Link href="#">Legal</Link>
          <span className="hidden md:inline">|</span>
          <Link href="#">Site Map</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
