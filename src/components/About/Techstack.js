import React from "react";
import { Col, Row } from "react-bootstrap";

import ceoImg from "../../Assets/avatar.svg";
import ctoImg from "../../Assets/avatar.svg";
import cooImg from "../../Assets/avatar.svg";
// Import other images for different management positions as needed

function Techstack() {
    const managementPositions = [
        { name: "John Doe", position: "CEO", img: ceoImg },
        { name: "Jane Smith", position: "CTO", img: ctoImg },
        { name: "Michael Johnson", position: "COO", img: cooImg },
        // Add more positions with their respective names and images
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {managementPositions.map((position, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <div>
                        <img src={position.img} alt={position.position} />
                        <div>
                            <span className="purple">{position.position}</span>
                            <br/>
                            <span className="name">{position.name}</span>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;
