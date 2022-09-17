import { IoChevronForwardOutline } from "react-icons/io5";
import {
  MdOutlineMailOutline,
  MdOutlineCall,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="bg-navyBlue relative lg:px-36 py-28">
      <div className="bg-overlay bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 bottom-0 overflow-hidden" />
      {/* Form & Map */}
      <h1 className="text-4xl md:text-5xl text-center mb-20">Get In Touch</h1>
      <div className="container p-8 md:p-12 mx-auto w-4/5 md:w-full md:flex sm:flex-nowrap flex-wrap flex-row-reverse gap-10 bg-darkBlue rounded-3xl">
        <div className="lg:w-2/3 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden hidden md:flex items-end justify-start relative h-[60vh]">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.348830776193!2d90.37707131478815!3d23.948101984492368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4abf8334fb1%3A0xbb003124c3dedc91!2z4KaH4Ka44Kay4Ka-4Kau4Ka_4KaVIOCmh-CmieCmqOCmv-CmreCmvuCmsOCnjeCmuOCmv-Cmn-CmvyDgpoXgpqwg4Kaf4KeH4KaV4Kao4KeL4Kay4Kac4Ka_!5e0!3m2!1sbn!2sbd!4v1663441283576!5m2!1sbn!2sbd"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 gap-3">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-darkBlueLight rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-darkBlueLight rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-100 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-lightBlue border-0 py-3.5 px-6 focus:outline-none rounded-lg text-lg mb-8 md:mb-0">
            <div className="flex justify-between text-sm">
              <span>Send Message</span>
              <IoChevronForwardOutline size={18} />
            </div>
          </button>
        </div>
      </div>
      {/* Contact Info */}
      <div className="flex flex-wrap my-12 mx-8 lg:mx-0">
        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
          <div className="flex border-2 rounded-xl border-gray-800 p-6 gap-6">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-lightBlue text-white flex-shrink-0">
              <MdOutlineMailOutline size={25} />
            </div>
            <div className="flex-grow">
              <h2 className="text-white font-medium mb-2">Message Us</h2>
              <p className="leading-relaxed text-sm">support@iut-dhaka.edu</p>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
          <div className="flex border-2 rounded-xl border-gray-800 p-6 gap-6">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-lightBlue text-white flex-shrink-0">
              <MdOutlineCall size={25} />
            </div>
            <div className="flex-grow">
              <h2 className="text-white font-medium mb-2">Call Us</h2>
              <p className="leading-relaxed text-sm">(+880) 12345678</p>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
          <div className="flex border-2 rounded-xl border-gray-800 p-6 gap-6">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-lightBlue text-white flex-shrink-0">
              <MdOutlineLocationOn size={25} />
            </div>
            <div className="flex-grow">
              <h2 className="text-white font-medium mb-2">Address</h2>
              <p className="leading-relaxed text-sm">Board Bazar, Gazipur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
