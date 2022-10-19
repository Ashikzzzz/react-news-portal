import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaSkype,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  IconName,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousle from "../Carousle/Carousle";

const Right = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login with google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h3 className="mt-2">Find us on</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaSkype></FaSkype> Skypee
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousle></Carousle>
      </div>
    </div>
  );
};

export default Right;
