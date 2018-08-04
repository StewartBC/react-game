import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import cards from "../cards.json";
import Card from "./Card";

class GameContainer extends Component {
    state = {
        message: "Click an image to begin!",
        chosenCards: [],
        clickedCards: [],
        score: 0,
        topScore: 0,
        justLost: false
    };

    startGame() {
        this.setState({ justLost: false });
        const allCards = cards;
        const chosenCards = [];
        for (let i = 0; i < 12; i++) {
            const randomCardIndex = Math.floor(Math.random() * allCards.length) - 1;
            chosenCards.push(allCards[randomCardIndex].id);
            allCards.splice(randomCardIndex, 1);
        }
        this.setState({ chosenCards });
    };

    componentDidMount() {
        this.startGame();
    };

    userMove = id => {
        const clickedCards = this.state.clickedCards;
        if (this.state.clickedCards.indexOf(id) === -1) {
            clickedCards.push(id);
            this.setState({ clickedCards });
            this.setState({ score: this.state.score + 1 }, () => {
                if (this.state.topScore <= this.state.score) {
                    this.setState({ topScore: this.state.score });
                }
            });
            if (clickedCards.length === 12) {
                this.startGame();
            }
        } else {
            this.setState({ score: 0 });
            this.setState({ justLost: true });
            setTimeout(() => {
                this.startGame()
            }, 500);
        }
    };

    renderCards(chosenCards) {
        for (let i = chosenCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            let temp = chosenCards[i];
            chosenCards[i] = chosenCards[j];
            chosenCards[j] = temp;
        }
    return ( 
        <Container>   
        <Row>
            <Col size="md-12">
            </Col>
        </Row>
            <Row>
                <Col size="md-12">
                    <Card justLost={this.state.justLost} userMove={this.userMove} ids={[chosenCards[0], chosenCards[1], chosenCards[2], chosenCards[3]]}/>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Card justLost={this.state.justLost} userMove={this.userMove} ids={[chosenCards[4], chosenCards[5], chosenCards[6], chosenCards[7]]}/>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Card justLost={this.state.justLost} userMove={this.userMove} ids={[chosenCards[8], chosenCards[9], chosenCards[10], chosenCards[11]]}/>
                </Col>
            </Row>
        </Container>    
    );
    };

    render() {
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Container>
                    <Row>
                        <Col size="md-12">
                        </Col>
                    </Row>
                    {this.renderCards(this.state.chosenCards)}
                </Container>
            </div>
        );
    };
}

export default GameContainer;