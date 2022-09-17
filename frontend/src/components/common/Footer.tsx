import { links } from "../../data/links";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#010306]">
      <div className="container md:px-5 py-24 mx-auto flex items-center justify-center  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Info */}
        <div className="w-full md:w-2/3 flex-shrink-0 text-center md:text-left md:pl-24 ">
          <a className="md:block flex items-center justify-center" href="/">
            <div className="h-90 w-50">
              <img src={logo} alt="logo" />
            </div>
          </a>
          <p className="mt-6 text-sm text-gray-500 md:max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            totam blanditiis provident perspiciatis veniam aut! Nesciunt quasi
            quae nihil nostrum.
          </p>
        </div>
        {/* Links */}
        <div className="w-full md:w-1/3 flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-full md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-8 md:mb-4">
              PAGES
            </h2>
            <nav className="list-none flex flex-wrap">
              {links.map((link, index) => (
                <li className="w-1/2 mb-3 text-sm" key={index}>
                  <a
                    className=" text-gray-400 hover:text-white"
                    href={`${link.path}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* End Credits */}
      <div className="border-t border-gray-800 pb-12 md:pb-0">
        <div className="container mx-auto py-12 px-24 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left mb-4 md:mb-0">
            © 2022 IUTCS
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white border border-gray-700 p-3 rounded-full">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 md:ml-3 text-white border border-gray-700 p-3 rounded-full">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 md:ml-3 text-white border border-gray-700 p-3 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
