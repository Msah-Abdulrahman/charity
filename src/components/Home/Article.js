import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import ceoImg from "../../Assets/article.svg";
import ctoImg from "../../Assets/article.svg";
import cooImg from "../../Assets/article.svg";
import Card from "react-bootstrap/Card";
// Import other images for different management positions as needed

function Article() {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const articles = [
        { title: "Article 1",
            content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ceoImg },
        { title: "Article 2",
            content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ctoImg },
        { title: "Article 3", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: cooImg },
        { title: "Article 4", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ceoImg },
        { title: "Article 5", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ctoImg },
        { title: "Article 6", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: cooImg },
        { title: "Article 7", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ceoImg },
        { title: "Article 8", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ctoImg },
        { title: "Article 9", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: cooImg },
        { title: "Article 10", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ceoImg },
        { title: "Article 11", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: ctoImg },
        { title: "Article 12", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: cooImg },
    ];

    return (
        <Container >
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {articles.map((article, index) => (
                <Col key={index} md={4} className="project-card">
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={article.img} alt="card-img" />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                {article.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        </Container>
    );
}

export default Article;
