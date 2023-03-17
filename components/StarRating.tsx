import React, { useState } from 'react';
import { Card, CardBody } from "reactstrap";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import './StarRating.css';
import Fade from 'reacht-reveal/Fade';
import { StarQ } from '../types/sections';

interface StarQ {
  question: string;
}

const StarRating = ({ question }: StarQ) => {
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
          onClick={() => setRating(starValue)}
        >
          {starValue <= (hover || rating) ? (
            <IoIosStar color="gold" />
          ) : (
            <IoIosStarOutline />
          )}
        </span>
      );
    });
  };

  return (
    <Fade left duration={2000}>
      <Card className="card-lift-hover shadow mt-4">
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

export default StarRating;