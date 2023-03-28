import React, { useState} from 'react';
import { Card, CardBody, Container, Row, Col}  from 'reactstrap';
import StarCard from '../components/StarCard';
import { StarBox } from '../portfolio';
import Fade from 'react-reveal/Fade';

const StarRating = () => {
    const [ratings, setRatings] = useState<number[]>(new Array(StarBox.length).fill(0));
    const [allAnswered, setAllAnswered] = useState<boolean>(false);
    const [answeredCount, setAnsweredCount] = useState<number>(0);


    const handleRatingChange = (questionIndex: number, value: number) => {
      setRatings(prevRatings => {
        const newRatings = [...prevRatings];
        if (newRatings[questionIndex] === 0) {
          setAnsweredCount(prevCount => prevCount + 1);
        }
        newRatings[questionIndex] = value;
  
        if (answeredCount === StarBox.length - 1) {
          setAllAnswered(true);
        }
  
        return newRatings;
      });
    };

      // Check if all questions have been answered
      if (!allAnswered && ratings.every((rating) => rating > 0)) {
        setAllAnswered(true);
      }
    };

    const totalScore = ratings.reduce((acc, curr) => acc + curr, 0);

    const ResultCard = () => {
      let resultText = "";
  
      if (totalScore <= 5) {
        resultText = "Not a perfect match, but I would still love to hear from you!";
      } else if (totalScore <= 10) {
        resultText = "We have some things in common, let's talk about it!";
      } else if (totalScore <= 15) {
        resultText = "We have a lot in common, let's talk about it!";
      } else {
        resultText = 'A near perfect match!'
      }
  
      return (
        <Fade bottom>
          <Card className="card-lift-hover shadow mt-4">
            <CardBody>
              <div className="d-flex px-3">
                <div className="pl-4">
                  <h5 className="text-info">{resultText}</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Fade>
      );
    };

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
            {allAnswered && <ResultCard />}
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