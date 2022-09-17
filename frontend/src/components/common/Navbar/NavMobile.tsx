import { IoClose } from "react-icons/io5";
import { links } from "../../../data/links";

interface Props {
  setMobileNav: (value: boolean) => void;
}

const NavMobile = ({ setMobileNav }: Props) => {
  return (
    <nav className="lg:hidden mobileNavBg w-full h-full">
      <IoClose
        className="text-3xl absolute left-4 top-6 cursor-pointer"
        onClick={() => setMobileNav(false)}
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
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
  );
};

export default NavMobile;
