import React from "react";
import styled from "styled-components";
import BranchCard from "../components/common/BranchCard";

const BranchPage = () => {
  return (
    <StyledBranchPage>
      <div className="container">
        <h1 className="p-3 text-center">分店資訊</h1>
        <div className="p-3">
          <BranchCard
            img="https://images.unsplash.com/photo-1511019075502-c3734f9a7cff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            map="https://goo.gl/maps/U3u6P276UE57re556"
            ubereats="https://www.ubereats.com/tw"
            foodpanda="https://www.foodpanda.com.tw/?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTn0312ZlgU-GCMOJ9yF35jyfQfEWzaDbiNEt-t-rziqDAohLqehzEaArJXEALw_wcB"
            address="546南投縣仁愛鄉仁和路170號"
            telephone="02-12345678"
          />
          <BranchCard
            img="https://images.unsplash.com/photo-1511942391222-ffe923680ba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            map="https://goo.gl/maps/4th4kaGppBisLLpM9"
            ubereats="https://www.ubereats.com/tw"
            foodpanda="https://www.foodpanda.com.tw/?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTn0312ZlgU-GCMOJ9yF35jyfQfEWzaDbiNEt-t-rziqDAohLqehzEaArJXEALw_wcB"
            address="253新北市石門區楓林路1號項"
            telephone="02-16666548"
          />
          <BranchCard
            img="https://images.unsplash.com/photo-1527598125826-84caf70bfd11?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            map="https://goo.gl/maps/EeMtEjxnF34ydxi16"
            ubereats="https://www.ubereats.com/tw"
            foodpanda="https://www.foodpanda.com.tw/?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTn0312ZlgU-GCMOJ9yF35jyfQfEWzaDbiNEt-t-rziqDAohLqehzEaArJXEALw_wcB"
            address="946屏東縣恆春鎮燈塔路90號"
            telephone="02-87654321"
          />
        </div>
      </div>
    </StyledBranchPage>
  );
};

const StyledBranchPage = styled.div`
  background-color: #fffced;
  padding-top: 130px;
`;

export default BranchPage;
