import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const ActivityCard = ({ img, text, text1, text2, text3 }) => {
  return (
    <StyledActivityCard>
      <div className="p-2">
        <Card>
          <Card.Body>
            <div className="row">
              <Col xs={12} md={6}>
                <Image src={img} rounded width="100%" />
              </Col>
              <div className="col-lg-6 col-md-6 my-auto">
                <ul className="">
                  <li className="font-weight-bold pb-3 text">{text}</li>
                  <li>{text1}</li>
                  <li>{text2}</li>
                  <li className="text3">{text3}</li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </StyledActivityCard>
  );
};

const StyledActivityCard = styled.div`
  color: #2d2d2d;
  .text {
    padding-top: 50px;
    font-size: 30px;
  }
  .text3 {
    padding-top: 50px;
    font-size: 16px;
  }
`;

export default ActivityCard;
