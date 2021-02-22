import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="text-center text-lg-start">
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <iframe
                className="align-baseline m-0 p-0 border-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14563.947006560575!2d121.2758385!3d24.1371034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc95761a7402da803!2z5q2m5ba6!5e0!3m2!1szh-TW!2stw!4v1613533167686!5m2!1szh-TW!2stw"
                width="275"
                height="275"
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 my-auto text-center">
              <h5 className="text-uppercase pt-3 font-weight-bold">總店資訊</h5>
              <ul className="list-unstyled mb-0 p-3">
                <li className="p-1">
                  <FaMapMarkerAlt className="mb-1 mr-sm-2" />
                  地址：546南投縣仁愛鄉仁和路170號
                </li>
                <li className="p-1">
                  <FaClock className="mb-1 mr-sm-2" />
                  營業時間：周一至周日11:00~22:00
                </li>
                <li className="p-1">
                  <FaPhoneAlt className="mb-1 mr-sm-2" />
                  連絡電話：
                  <a className="a" href="tel:02-12345678">
                    02-12345678
                  </a>
                </li>
              </ul>
              <a
                className="p-2"
                href="https://www.ubereats.com/tw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-9.png"
                  alt=""
                  width="50"
                />
              </a>
              <a
                className="p-2"
                href="https://www.foodpanda.com.tw/?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTn0312ZlgU-GCMOJ9yF35jyfQfEWzaDbiNEt-t-rziqDAohLqehzEaArJXEALw_wcB"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQF49MA-tvVQwQ/company-logo_200_200/0/1519895464101?e=2159024400&v=beta&t=rlYLtirXXrOZEhbto7dunueikzC8yfeIwuB8zdtWd_c"
                  alt=""
                  width="50"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          © 2021 Copyright:
          <a className="text-secondary a"
            href="https://github.com/TimOuO"
            target="_blank"
            rel="noreferrer">
            Tim
          </a>
        </div>
      </footer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
  background-color: #fcf2d2;
  color: #2d2d2d;

  .a {
    color: #2d2d2d;
    &:hover {
      color:#000000;
      text-decoration: none;
    }
  }
`;
export default Footer;
