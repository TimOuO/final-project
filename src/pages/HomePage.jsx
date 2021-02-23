import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActivityCard from "../components/common/ActivityCard";
import Activity from "../assets/images/Activity.png";

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6646067/pexels-photo-6646067.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>美味</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6646072/pexels-photo-6646072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>香甜</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/929174/pexels-photo-929174.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>可口</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="text-center text-lg-start">
          <div className="row">
            <div className="col-md-12 my-auto text-center p-3 text">
              <h1 className="text-uppercase p-2 font-weight-bold">介紹</h1>
              <ul className="list-unstyled mb-0 mw-100 font-size">
                <li>~美味讓我們見面~</li>
                <li>這是人們常相聚、見面的場所，</li>
                <li>是生活與情感的交會處，希望以美味為名，</li>
                <li>號召人們相聚見面，像是同事、朋友的邀約：</li>
                <li>
                  吃甚麼？走，見麵。
                  <Link to={"/aboutus"}>
                    <p>了解更多...</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-lg-start">
          <div className="row">
            <div className="col-md-12 my-auto text-center p-3 text">
              <h1 className="text-uppercase p-2 font-weight-bold">公告</h1>
              <ul className="list-unstyled mb-0 mw-100 font-size">
                <li>2100/02/30 公休一天</li>
                <li>2099/02/30 公休一天</li>
                <li>2098/02/30 公休一天</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-lg-start">
          <div className="row">
            <div className="col-md-12 my-auto text-center p-3 text">
              <h1 className="text-uppercase p-2 font-weight-bold">最新活動</h1>
              <ul className="list-unstyled mb-0 mw-100 font-size">
                <li>
                  <ActivityCard
                    img={Activity}
                    text="Google評論 送小菜!"
                    text1=" 結帳前置櫃台兌換，每單限一次~"
                    text2="活動時間：無期限!"
                    text3="本公司保有活動更動之權限"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  background-color: #fffced;
  padding-top: 130px;
  .text {
    color: #2d2d2d;
  }
  .font-size {
    font-size: 1.5em;
  }
`;

export default HomePage;
