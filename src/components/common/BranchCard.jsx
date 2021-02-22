import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

const BranchCard = ({ img, map, ubereats, foodpanda, address, telephone }) => {
  return (
    <StyledBranchCard>
      <div className="p-2">
        <Card>
          <Card.Body>
            <div className="row">
              <Col xs={9} md={5}>
                <Image src={img} rounded width="100%" />
              </Col>
              <div className="my-auto ">
                <div className="p-1">
                  <Button
                    variant="primary"
                    className="button"
                    href={map}
                    target="_blank"
                  >
                    <FaMapMarkerAlt className="mb-1 mr-sm-2" />
                    Map
                  </Button>
                </div>

                <div className="p-1 button1">
                  <a className="p-2" href={ubereats} target="_blank" rel="noreferrer">
                    <img
                      src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-9.png"
                      alt=""
                      width="50"
                    />
                  </a>
                </div>

                <div className="p-1 button1">
                  <a className="p-2" href={foodpanda} target="_blank" rel="noreferrer">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQF49MA-tvVQwQ/company-logo_200_200/0/1519895464101?e=2159024400&v=beta&t=rlYLtirXXrOZEhbto7dunueikzC8yfeIwuB8zdtWd_c"
                      alt=""
                      width="50"
                    />
                  </a>
                </div>
              </div>
              <ul className="list-unstyled align-self-center pt-3 pl-3 my-auto">
                <li>
                  <FaMapMarkerAlt className="mb-1 mr-sm-2" />
                  地址：{address}
                </li>
                <br />
                <li>
                  <FaClock className="mb-1 mr-sm-2" />
                  營業時間：周一至周日11:00~22:00
                </li>
                <br />
                <li>
                  <FaPhoneAlt className="mb-1 mr-sm-2" />
                  連絡電話：
                  <a className="a" href="tel:{telephone}">
                    {telephone}
                  </a>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </StyledBranchCard>
  );
};

const StyledBranchCard = styled.div`
  .button {
    border: 2px blue none;
    border-radius: 10px;
    color: white;
    background-color: #ffb549;
    padding: 8px;
    &:hover {
      transform: scale(1.15, 1.15);
      transition: transform 0.25s ease;
      background-color: #ff585d;
      text-decoration: none;
    }
  }
  .button1 {
    &:hover {
      transform: scale(1.15, 1.15);
      transition: transform 0.25s ease;
    }
  }
  .a {
    color: #2d2d2d;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default BranchCard;
