import logo from "../../../assets/Logo.svg";
import { useState, useEffect } from "react";
import NavMobile from "./NavMobile";
import { links } from "../../../data/links";
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<Boolean>(false);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-30 w-full ${mobileNav ? "" : "bgBlur"} ${
        isScrolled && "bg-[#00000080]"
      }`}
    >
      {mobileNav && (
        <div
          className={`${
            mobileNav ? "right-0" : "-right-full"
          }  fixed top-0 bottom-0 w-52 slide-in-right `}
        >
          <NavMobile setMobileNav={setMobileNav} />
        </div>
      )}
      <div className="flex items-center h-16 px-6 md:px-10 lg:px-20 gap-8">
        <a className="block " href="/">
          <div className="h-90 w-50">
            <img src={logo} alt="logo" className="h-24 w-16" />
          </div>
        </a>

        <div className="flex items-center justify-end flex-1 md:justify-between">
          <nav className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            {/* Links */}
            <ul className="flex items-center text-xs lg:text-sm gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-white/90 transition hover:text-white"
                    href={`${link.path}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="md:gap-4 hidden lg:flex">
              <a
                className="block px-5 py-1.5 text-sm font-medium text-white bg-lightBlue transition rounded-xl"
                href="/"
              >
                Contact us
              </a>
            </div>

            <button
              className="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75"
              onClick={() => setMobileNav(true)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
