import React from "react";
import "./Card.css";

const Card = props => {
    return (
        <div className={"card " + (props.justLost ? "shake" : "")}>
            <div className="img-container">
                <img alt="" onClick={() => props.userMove(props.ids[0])} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.ids[0]}.png`} />
                <img alt="" onClick={() => props.userMove(props.ids[1])} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.ids[1]}.png`} />
                <img alt="" onClick={() => props.userMove(props.ids[2])} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.ids[2]}.png`} />
                <img alt="" onClick={() => props.userMove(props.ids[3])} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.ids[3]}.png`} />
            </div>
        </div>
    )
}

export default Card;
