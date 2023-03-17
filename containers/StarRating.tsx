import React, { useState} from 'react';
import {Container, Row, Col}  from 'reactstrap';
import StarCard from '../components/StarCard';
import { StarBox } from '../portfolio';

const StarRating = () => {
    const [ratings, setRatings] = useState<number[]>(new Array(StarBox.length).fill(0));
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    const handleRatingChange = (index: number, newRating: number) => {
      setRatings((prevRatings) => {
        const updatedRatings = [...prevRatings];
        updatedRatings[index] = newRating;
        return updatedRatings;
      });

      // Check if all questions have been answered
    const allAnswered = ratings.every((rating, idx) => (idx === index ? newRating : rating) > 0);
    setAllQuestionsAnswered(allAnswered);
    };

    const totalScore = ratings.reduce((acc, curr) => acc + curr, 0);

    return (
      StarBox && (
        <section className="section pb-0 bg-gradient-info my-5">
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-books text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">Star Card</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {StarBox.map((question, index) => {
                return (
                  <Col className="order-lg-1" lg="6" key={index}>
                    <StarCard
                    question={question}
                    onRatingChange={(newRating) =>handleRatingChange(index,newRating)}
                    />
                  </Col>
                );
              })}
            </Row>
            {allQuestionsAnswered && (
            <Row>
              <Col>
                <h4>Total Score: {totalScore}</h4>
                {totalScore >= 0 && totalScore <= 5 && (
                  <p>Based on your total score, display content for 0-5 stars.</p>
                )}
                {totalScore >= 6 && totalScore <= 10 && (
                  <p>Based on your total score, display content for 6-10 stars.</p>
                )}
                {totalScore >= 11 && totalScore <= 15 && (
                  <p>Based on your total score, display content for 11-15 stars.</p>
                )}
                {/* Add more conditions for other star ranges */}
              </Col>
            </Row>
          )}
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      )
    );
  };
  
  export default StarRating;