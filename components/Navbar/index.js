import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuBaseClass =
    "Navbar__menu--mobile flex flex-col md:hidden absolute bg-white shadow-lg left-0 w-full z-10 text-center overflow-hidden";
  const mobileMenuClassNames = classNames(mobileMenuBaseClass, {
    "menu--open": mobileMenuOpen,
    "menu--closed": !mobileMenuOpen,
  });

  return (
    <div className="Navbar py-5 md:py-10">
      <div className="container flex justify-between items-center">
        <div className="Navbar__name">
          <Link href="/">
            <a>
              <div className="font-semibold text-noche text-lg my-0 leading-3 top">
                Nathalie Garcia
              </div>
              <div className="text-xs md:text-sm">
                interior design & styling
              </div>
            </a>
          </Link>
        </div>
        <button
          className="btn btn--sm md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          menu
        </button>
        <div className={mobileMenuClassNames}>
          <div className="py-5">
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </div>
          <div className="py-5">
            <Link href="/inspiration">
              <a>Inspiration</a>
            </Link>
          </div>
          <div className="py-5">
            <a href="/Nathalie-Garcia-Resume.pdf" target="_blank">
              My Resume
            </a>
          </div>
        </div>
        <div className="Navbar__menu text-center hidden md:flex">
          <div className="Navbar__menu__menu-item hover:bg-gray-100">
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </div>
          <div className="Navbar__menu__menu-item hover:bg-gray-100">
            <Link href="/inspiration">
              <a>Inspiration</a>
            </Link>
          </div>
          <div className="Navbar__menu__menu-item hover:bg-gray-100">
            <a href="/Nathalie-Garcia-Resume.pdf" target="_blank">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
