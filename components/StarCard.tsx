import React, { useState } from 'react';
import { Card, CardBody } from "reactstrap";
import Fade from 'react-reveal/Fade';
import { StarQuestion } from '../types/sections';

const StarCard:  React.FC<StarQuestion> = ({ question, onRatingChange }: 
StarQuestion) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;

      return (
        <span
          key={index}
          onMouseEnter={() => setHover(starValue)}
          onMouseLeave={() => setHover(0)}
          onClick={() => {
            setRating(starValue);
            onRatingChange(starValue);
          }}
          style={{
            cursor: "pointer",
            color: starValue <= (hover || rating) ? "gold" : "gray",
            fontSize: "40px",
          }}
        >
          {String.fromCharCode(9733)} {/* Unicode star character */}
        </span>
      );
    });
  };

  return (
    <Fade left duration={2000}>
      <Card className="card-lift-hover shadow mt-4" style={{ zIndex: 1000 }}>
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{question}</h5>
              <div>{renderStars()}</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default StarCard;