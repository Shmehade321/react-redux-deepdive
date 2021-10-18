import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParkDetails } from "../parkActions";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ParkDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();

  const parkDetails = useSelector((state) => state.parkDetails);
  const { loading, error, park } = parkDetails;

  useEffect(() => {
    dispatch(getParkDetails(match.params.parkId));
  }, [dispatch, match]);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Park Details</h1>
          <Link to="/" className="btn btn-link btn-light">
            Go Back
          </Link>
          {loading ? (
            "Loading..."
          ) : error ? (
            { error }
          ) : (
            <Row>
              <Col>
                <h3>Park Name: {park.fullName}</h3>
                <p>Park Description: {park.description}</p>
                <Image src={park?.images?.length > 0 && park.images[0].url} height={600} fluid />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ParkDetailsScreen;
