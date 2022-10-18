import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home/Home";
import Header from "../Pages/Shared/Header/Header";
import Left from "../Pages/Shared/Left/Left";
import Right from "../Pages/Shared/Right/Right";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <Left></Left>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <Right></Right>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
