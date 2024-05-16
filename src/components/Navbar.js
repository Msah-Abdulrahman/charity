import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FcDonate } from "react-icons/fc";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlinePermMedia } from "react-icons/md";
import logo from "../Assets/logo.png";
import {Alert} from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
      <>
        <Alert variant="warning" className="text-center">
          <strong>Note:</strong> This is not a production version. The UI and other functionalities may be added later.
        </Alert>
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                  updateExpanded(expand ? false : "expanded");
                }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to="/project"
                      onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineFundProjectionScreen
                        style={{ marginBottom: "2px" }}
                    />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to="/media"
                      onClick={() => updateExpanded(false)}
                  >
                    <MdOutlinePermMedia style={{ marginBottom: "2px" }} /> Media
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to="/about"
                      onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="fork-btn">
                  <Button
                      onClick={handleShowModal}
                      className="fork-btn-inner"
                  >
                    Donate {" "}
                    <FcDonate style={{ fontSize: "1.3em" }} />
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Donate to Our Cause</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Use Equity Paybill</h5>
            <p>Follow these steps to make a donation:</p>
            <ol>
              <li>Open your Sim toolkit or banking app.</li>
              <li>Select 'Pay Bill' option.</li>
              <li>Enter the Paybill number: <strong className="purple">247247</strong>.</li>
              <li>Enter the Account Number: <strong className="purple">104 578</strong>.</li>
              <li>Enter the amount you wish to donate.</li>
              <li>Confirm the details and submit.</li>
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

export default NavBar;
