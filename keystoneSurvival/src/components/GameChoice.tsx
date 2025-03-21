import React from 'react';
import "./GameChoice.css"

interface GameChoiceProps {
    option: string,
    affect: number,
};

function GameChoice({props}: {props:GameChoiceProps}){
    return(
        <div className="gameChoiceContainer">
            <p>{props.option}</p>
        </div>
    );
}

export default GameChoice;