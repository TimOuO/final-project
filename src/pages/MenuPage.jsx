import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import menu from "../assets/images/menu.png";
import FoodCard from "../components/common/FoodCard";

const MenuPage = () => {
  return (
    <StyledMenuPage>
      <div className="container">
        <div className="text-center p-3">
          <h1 className="p-3 text-center text font-weight-bold">美味菜單</h1>
        </div>
        <div className="row text-center">
          <div className="col-lg-6 col-md-6 mb-4 mb-md-4">
            <Card>
              <img src={menu} alt="" width="100%" />
            </Card>
          </div>
          <div className="col-lg-6 col-md-6 mb-4 mb-md-4">
            <Card>
              <img src={menu} alt="" width="100%" />{" "}
            </Card>
          </div>
        </div>
        <div className="text-center ">
          <h3 className="p-3 text-center text font-weight-bold">各項料理</h3>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-4">
              <FoodCard
                img={
                  "https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                title="黯然消魂麵"
                text="吃了蝦馬上銷魂"
              />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-4">
              <FoodCard
                img={
                  "https://images.unsplash.com/photo-1516901121982-4ba280115a36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                }
                title="清淡麵"
                text="看起來很清淡"
              />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-4">
              <FoodCard
                img={
                  "https://images.unsplash.com/photo-1504669887860-f6d4cc3feb4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                title="牛肉麵"
                text="吃了哞哞叫"
              />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-4">
              <FoodCard
                img={
                  "https://images.unsplash.com/photo-1520689656391-66b6dd7f0ec6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                }
                title="青青草麵"
                text="吃完彷彿置身於大草原中"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledMenuPage>
  );
};

const StyledMenuPage = styled.div`
  background-color: #fffced;
  padding-top: 130px;
  .hover {
    &:hover {
      transform: scale(1.5, 1.5);
      transition: transform 0.25s ease;
    }
`;

export default MenuPage;
