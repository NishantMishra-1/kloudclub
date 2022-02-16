import React from "react";
import Header from "../Components/Header";
import { FooterContainer } from "../containers/footer";

const Layout = (props) => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>{props.children}</main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
};

export default Layout;
