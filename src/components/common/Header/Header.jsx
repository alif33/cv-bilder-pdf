import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary-lite">
      <div className="w-[90%] h-[80px] mx-auto flex items-center">
        <div className="basis-1/2">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              CV Builder <span className="text-primary-deep italic">Pro</span>
            </h1>
          </Link>
        </div>
        <div className="basis-1/2 flex justify-between items-center">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li><Link href="/faq">Blog</Link></li> */}
            <li>
              <Link href="/faq">Templates</Link>
            </li>
            <li>
              <Link href="/about-us">Why choose us</Link>
            </li>
            {/* <li><Link href="/contact-us">Contact Us</Link></li> */}
          </ul>
          <Link
            href="/build-cv"
            className="bg-primary-deep text-white px-4 py-3 hover:text-primary-deep hover:bg-white hover:border hover:border-primary-deep rounded-md transition-all"
          >
            Create your CV
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
