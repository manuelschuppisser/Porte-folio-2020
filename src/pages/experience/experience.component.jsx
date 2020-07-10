import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Intec from "../../assets/img/experience/Intec.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header  as="h5" className="d-flex justify-content-center flex-wrap top-experience">
                <Card.Img variant="top" className="img-resize" src={L_Intec} alt="Intec Logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Digitals Skills</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> Web Developer
                    <br />
                    <strong>Role:</strong> FrameWorks/UX 
                    <br />
                    <strong>Description:</strong> Design an aesthetic dynamic page in relation to the user experience.
                    <br />
                    <strong>Technology:</strong> Adobe Creative Suite, HTML5, CSS3, Java Script, Vue.js, React.
                    <br />
                    <strong>Duration:</strong> January 2020 - July 2020
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
