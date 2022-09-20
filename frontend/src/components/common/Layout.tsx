import React from "react";
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
    </div>
  );
};

export default Layout;
