import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listParks } from "../parkActions";
import ParkCard from "../components/ParkCard";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const parkList = useSelector((state) => state.parkList);
  const { loading, error, parks } = parkList;

  useEffect(() => {
    dispatch(listParks());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        
          <h1>Home</h1>
          {loading
            ? "Loading...."
            : error
            ? { error }
            : parks?.data?.map((park) => (
                <Col md={4}>
                <ParkCard
                  key={park.id}
                  parkId={park.id}
                  image={park.images[0].url}
                  title={park.fullName}
                  description={park.description}
                />
                </Col>
              ))}
        
      </Row>
    </Container>
  );
};

export default HomeScreen;
