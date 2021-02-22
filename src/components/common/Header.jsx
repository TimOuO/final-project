import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import Hamburger from "hamburger-react";
import LOGO from "../../assets/images/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand>
            <Link to={"/"}>
              <img className="hover" src={LOGO} alt="LOGO" width="70" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Hamburger direction="right" color="#8b4513" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
              <Link to={"/aboutus"} className="button ">
                <Nav.Link href="/aboutus">關於我們</Nav.Link>
              </Link>
              <Link to={"/menu"} className="button">
                <Nav.Link href="/menu">美味菜單</Nav.Link>
              </Link>
              <Link to={"/branch"} className="button">
                <Nav.Link href="/branch">分店資訊</Nav.Link>
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmTzTSTlBSW8PZYZwffko3BQw3hEwR9LyCq_Jlq8XbbB9pKA/viewform"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                <Nav.Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdmTzTSTlBSW8PZYZwffko3BQw3hEwR9LyCq_Jlq8XbbB9pKA/viewform"
                  target="_blank"
                >
                  訂購表單
                </Nav.Link>
              </a>
              <a
                href="https://zh-tw.facebook.com/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                <Nav.Link href="https://zh-tw.facebook.com/" target="_blank">
                  <FaFacebook
                    className="mr-sm-2 hover"
                    size="25"
                    color="rgb(24 119 242)"
                  />
                  Facebook
                </Nav.Link>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  text-align: center;
  background-color: #fcf2d2;
  position: fixed;
  z-index: 9999;
  width: 100%;
  .hover {
    &:hover {
      transform: scale(1.15, 1.15);
      transition: transform 0.25s ease;
    }
  }
  .text {
    color: white;
  }
  .button {
    font-size: 20px;
    border: 2px blue none;
    border-radius: 20px;
    color: white;
    background-color: #ffb549;
    padding: 4px;
    &:hover {
      transform: scale(1.15, 1.15);
      transition: transform 0.25s ease;
      background-color: #ff585d;
      text-decoration: none;
    }
  }
`;

export default Header;
