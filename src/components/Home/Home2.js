import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Article from "./Article";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Article />
    </Container>
  );
}
export default Home2;
