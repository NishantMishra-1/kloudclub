import React from "react";
import Header from "../Components/Header";

const Layout = (props) => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
