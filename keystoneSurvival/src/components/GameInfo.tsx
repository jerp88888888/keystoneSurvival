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
            <p className="description">{props.description}</p>
        </div>
    );
}

export default GameInfo;