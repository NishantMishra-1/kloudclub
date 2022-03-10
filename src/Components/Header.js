import React, { useState } from "react";
import styled from "styled-components";
import "./Header.css";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import logout from "../authentication/Logout";

function Header() {
  const [colorChange, setColorchange] = useState(true);

  // const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //         setColorchange(true);
  //     } else {
  //         setColorchange(false);
  //     }
  // };
  // window.addEventListener("scroll", changeNavbarColor);

  let loggedIn = localStorage.getItem("user");

  const logoutHandler = () => {
    logout();
  };

  return (
    <Container className={colorChange ? "navbar changeColor" : "navbar"}>
      <Logo>
        <img src="/Images/logo.jpeg" alt="logo" />
        <h1>
          <a
            href="#portfolio"
            className={colorChange ? "noChange change" : "noChange"}
          >
            Kloud
            <span style={{ color: "#0099ff" }}>Club</span>
          </a>
        </h1>
      </Logo>
      <Options>
        <ListItems1 className="extended">
          <li>
            <Link
              to="/home"
              className={colorChange ? "noChange change" : "noChange"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={colorChange ? "noChange change" : "noChange"}
            >
              About
              {/* <IoIosArrowDown className="down" /> */}
            </Link>
            {/* <DropDown className="drop">
                            <li>
                                <a href="#us">About Us</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <a href="#testimonial">Testimonial</a>
                            </li>
                        </DropDown> */}
          </li>
          <li>
            <Link
              to={loggedIn === "LOGGED_IN" ? "/jobs/admin":"/jobs"}
              className={colorChange ? "noChange change" : "noChange"}
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={colorChange ? "noChange change" : "noChange"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={colorChange ? "noChange change" : "noChange"}
            >
              Contact
            </Link>
          </li>
        </ListItems1>
        <ListItems2>
          <li>
            <a href="#twitter">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#facebook">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <Link
              to="/jobs/admin"
              className={colorChange ? "noChange change" : "noChange"}
            >
              {loggedIn !== "LOGGED_IN" ? (
                <button className="login">Log In</button>
              ) : (
                <button className="logoutBtn" onClick={logoutHandler}>
                  Log Out
                </button>
              )}
            </Link>
          </li>
        </ListItems2>
      </Options>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: white;
    object-fit: center;
    padding: 5px;
    @media (max-width: 900px) {
      width: 40px;
      height: 40px;
    }
  }
  h1 {
    margin-left: 10px;
    font-size: 25px;
    a {
      text-decoration: none;
      color: white;
      font-family: "Princess Sofia", cursive;
      letter-spacing: 5px;
    }
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItems1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid grey;
  @media (max-width: 764px) {
    display: none;
  }
  li {
    list-style: none;
    margin-right: 30px;
    border-bottom: 0px solid white;
  }
  li a {
    text-decoration: none;
    color: grey;
    color: black;
    font-size: 20px;
    padding: 5px;
    &:hover {
      color: #1087eb;
    }
    @media (max-width: 960px) {
      font-size: 15px;
    }
  }
`;

const DropDown = styled.ul`
  position: absolute;
  text-align: start;
  background-color: white;
  border-top: 2px solid green;
  line-height: 45px;
  padding: 5px 25px;
  li a {
    color: black;
  }
`;

const ListItems2 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  @media (max-width: 764px) {
    display: none;
  }
  li {
    list-style: none;
    margin-right: 30px;
    line-height: 40px;
  }
  li a {
    text-decoration: none;
    color: grey;
    font-size: 20px;
    &:hover {
      color: #1087eb;
    }
    @media (max-width: 960px) {
      font-size: 15px;
    }
  }
`;
