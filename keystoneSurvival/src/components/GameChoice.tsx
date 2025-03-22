import React from 'react';
import "./GameChoice.css"
import { GameChoiceProps } from '../ts/classes/classSuport';

function GameChoice({props}: {props:GameChoiceProps}){
    return(
        <div className="gameChoiceContainer">
            <p>{props.option}</p>
        </div>
    );
}

export default GameChoice;