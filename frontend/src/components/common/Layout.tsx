import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="pb-12">
        <Navbar />
      </div>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
