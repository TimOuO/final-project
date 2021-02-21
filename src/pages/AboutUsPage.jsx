import React from "react";
import styled from "styled-components";

const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <div className="container">
        <h1 className="p-3 text-center text font-weight-bold">關於我們</h1>
        <div className="row text-center">
          <div className="col-lg-6 col-md-12 text font-size m-auto p-3">
            <h2 className="p-2 font-weight-bold">品牌由來</h2>
            <p className="mb-0 mw-100">
              好的麵條是有生命的~
              點線麵秉持「安全」、「簡單」、「專業」製麵法，掌握單純安全的原材料，
              做出不簡單的好麵條。
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              className="p-3"
              src="https://images.unsplash.com/photo-1591601392196-dd6afe757012?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              className="p-3"
              src="https://images.unsplash.com/photo-1542834352-b64998ba276f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
              width="100%"
            />
          </div>
          <div className="col-lg-6 col-md-12 text font-size m-auto p-3">
            <h1 className="p-2 font-weight-bold">信念</h1>
            <p className="mb-0 mw-100">
              對於各項食材及調味品，堅持五十年來以最傳統的方式
              以及最嚴謹的態度來呈現給每一位消費者
              在最近的新聞事件中，本公司各項產品均通過SGS最嚴格的檢驗
              傳統的好滋味，我們很堅持 ~
            </p>
          </div>
        </div>
      </div>
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;

const StyledAboutUsPage = styled.div`
  background-color: #fffced;
  padding-top: 130px;
  .text {
    color: #2d2d2d;
  }
  .font-size {
    font-size: 1.5em;
  }
`;
