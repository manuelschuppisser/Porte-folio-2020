import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import {GlassMagnifier} from "react-image-magnifiers";
import L_ArtShop from "../../assets/img/projects/ArtShop.jpg";
import L_ArtWeb from "../../assets/img/projects/ArtWeb.jpg";
import L_PorteFolio from "../../assets/img/projects/PorteFolio.jpg";
import L_MusicApp from "../../assets/img/projects/MusicApp.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_WordPress from "../../assets/img/skills/WordPress.svg";
import L_Vue from "../../assets/img/skills/Vue-js.svg";
import L_FireBase from "../../assets/img/skills/Firebase.svg";
import L_OVH from "../../assets/img/skills/ovh.png";
import L_GitHub from "../../assets/img/skills/github.svg";
import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        

          {/* Project: PortFolio */}

          <ImageEvent date="23/06/2020" className="text-center" text="PortFolio">              
          <GlassMagnifier imageSrc={L_PorteFolio} imageAlt="PortFolio" largeImageSrc={L_PorteFolio}/>
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Page for the presentation of my IT work.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create informative content</li>
                          <li>Make the page visually aesthetic</li>
                          <li>Make a user interface easy and intuitive</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FireBase} alt="FireBase" rounded className="image-style m-1"></Image> FireBase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://portfolio-manu.web.app/">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/manuelschuppisser/Portfolio-2020" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
{/* art-shop */}
<ImageEvent date="05/06/2020" className="text-center" text="Cart use Redux for a Art Shop">
       <GlassMagnifier imageSrc={L_ArtShop} imageAlt="Cart use Redux for a Art Shop" largeImageSrc={L_ArtShop}/>
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Cart use Redux for a Art Shop.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Construction of a sales page </li>
                          <li>Configuration of a functional basket </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REDUX} alt="Redux.js" rounded className="image-style1 m-1"></Image> redux.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_GitHub} alt="Github" rounded className="image-style m-1"></Image> Git Hosting
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://manuelschuppisser.github.io/shop-redux-online/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/manuelschuppisser/shoppingcart-redux" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* My personal art site  */}
<ImageEvent date="10/05/2020" className="text-center" text="My personal art site">
    <GlassMagnifier imageSrc={L_ArtWeb} imageAlt="My personal art site" largeImageSrc={L_ArtWeb}/>
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Creation of a multipage website in WordPress.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add personal content to a template </li>
                          <li>Add plugins adapted to projects </li>
                          <li>Work with the full version of "Elementor"</li>
                          <li>Correct or modify elements in the site source code.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_WordPress} alt="WordPress" rounded className="image-style1 m-1"></Image> WordPress
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_OVH} alt="OVH" rounded className="image-style m-1"></Image> OVH
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://manuel-schuppisser.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: MusicApp */}
          <ImageEvent date="03/04/2020" className="text-center" text="Music App">
             <GlassMagnifier imageSrc={L_MusicApp} imageAlt="music App" largeImageSrc={L_MusicApp}/>
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Creation of a Vue.js Mp3 Player App.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Creation of a array list and the content</li>
                          <li>Build a "Player" module to call sound files</li>
                          <li>Make a ClickEvent for play/pause on the mp3 image</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_Vue} alt="Vue.js" rounded className="image-style m-1"></Image> Vue.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FireBase} alt="FireBase" rounded className="image-style m-1"></Image> FireBase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="https://music-app-manu.firebaseapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/manuelschuppisser/music-app" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}
