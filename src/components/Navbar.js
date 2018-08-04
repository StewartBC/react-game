import React from "react";
import Row from "./Row";
import Col from "./Col";

const Navbar = props => (
    <div className="container-fullwidth">
    <nav className="navbar navbar-light bg-light">
        <Row>
            <Col size="md-12">
            Score: {props.score} | Top Score: {props.TopScore}
            </Col>
            </Row>
    </nav>
    </div>
);

export default Navbar;