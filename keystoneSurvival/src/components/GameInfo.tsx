import React from 'react';
import './GameInfo.css';

interface GameInfoProps {
    title: string,
    img: string,
    description: string
};

function GameInfo({props}: {props:GameInfoProps}){
    return(
        <div className="gameInfoContainer">
            <h2 className="title">{props.title}</h2>
            <img className="gameInfoImage" src={props.img} alt=""/>
            <h5 className="description">{props.description}</h5>
        </div>
    );
}

export default GameInfo;