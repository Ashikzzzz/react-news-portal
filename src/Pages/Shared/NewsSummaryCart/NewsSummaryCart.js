import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
  console.log(news);
  const { _id, details, image_url, title, total_view, rating, author } = news;
  return (
    <Card className="text-center mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex  align-items-center me-2">
          <Image
            src={author.img ? author.img : "no data"}
            style={{ height: "60px" }}
            roundedCircle
          ></Image>
          <div>
            <p>{author.name}</p>
            <p>
              {" "}
              <small>
                {author.published_date
                  ? author.published_date
                  : "no data found"}
              </small>
            </p>
          </div>
        </div>
        <div>
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>See more</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCart;
