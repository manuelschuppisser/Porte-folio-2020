import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_VUE_JS from "../../assets/img/skills/Vue-js.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_FIREBASE from "../../assets/img/skills/Firebase.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_WordPress from "../../assets/img/skills/WordPress.png";
import L_OVH from "../../assets/img/skills/ovh.png";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_ADOBE from "../../assets/img/skills/Adobe.png";
import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
                      <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image> React
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://vuejs.org//" target="_blank" rel="noopener noreferrer">
                      <Image src={L_VUE_JS} alt="Vue" rounded className="image-style m-1"></Image> Vue
                    </a>
                  </span>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style m-1"></Image> Node.js
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style m-1"></Image> Firebase
                    </a>
                  </span>

                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                 

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.ovh.com/fr/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_OVH} alt="OVH" rounded className="image-style m-1"></Image> OVH
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GITHUB_PAGES} alt="GitHub Pages" rounded className="image-style m-1"></Image> GitHub-Pages
                    </a>
                  </span>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Design tools</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://wordpress.org//" target="_blank" rel="noopener noreferrer">
                      <Image src={L_WordPress} alt="WordPress" rounded className="image-style m-1"></Image> WordPress
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.adobe.com//" target="_blank" rel="noopener noreferrer">
                      <Image src={L_ADOBE} alt="Abobe Creative Cloud" rounded className="image-style m-1"></Image> Abobe Suite
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                 
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank" rel="noopener noreferrer">
                      <Image src={L_MSSQL} alt="MS-SQL" rounded className="image-style m-1"></Image> MS-SQL
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GIT} alt="GIT" rounded className="image-style m-1"></Image> GIT
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
