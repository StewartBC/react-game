import React from "react";

const Header = props => (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">Hearthstone Memory Game</h1>
    <p className="lead">Click on a card to increase your score, but don't click on the same card twice.</p>
    <p className="lead">Score: {props.score}     |     Top Score: {props.topScore}</p>
  </div>
</div>
);

export default Header;