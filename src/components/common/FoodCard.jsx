import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const FoodCard = ({ img, title, text }) => {
  return (
    <StyledFoodCard>
      <Card>
        <Card.Img variant="top" src={img} className="img" />
        <Card.Body>
          <Card.Title className="font-weight-bold">{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </StyledFoodCard>
  );
};

const StyledFoodCard = styled.div`
  .img {
    padding: 10px;
    width: 100%;
    margin: auto;
  }
`;

export default FoodCard;
