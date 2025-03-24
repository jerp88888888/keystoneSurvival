import React from 'react';
import "./GameChoice.css"
import { GameChoiceProps } from '../ts/classes/classSuport';
import { useNavigate } from 'react-router-dom';


function UpdateGame (chanceOfSuccess: number, gameInfo, setGameInfo, navigator){
    let tmpGameInfo = {data};
    const scale = 85;
    tmpGameInfo["data"] = gameInfo.data;
    if(gameInfo.data.length < 1){
      tmpGameInfo.data = beaverSituations;
    }
    const index = Math.floor(Math.random()*tmpGameInfo.data.length)
    tmpGameInfo["survival"] = gameInfo.survival*chanceOfSuccess/scale;
    tmpGameInfo["event"] = tmpGameInfo.data[index];
    console.log("Index: "+index);
    console.log(tmpGameInfo.data);
    tmpGameInfo.data = [...gameInfo.data.slice(0,index),...gameInfo.data.slice(index+1)];
    tmpGameInfo.level = gameInfo.level+1;
    console.log("Temporary Game Info");
    console.log(tmpGameInfo);
    // if(gameInfo.survival <= 40){
    //     navigator("/Fail");
    // }
    
    // if(gameInfo.level > 9){
    //     navigator("/Success")
    // }
    setGameInfo(tmpGameInfo);
  }

function GameChoice({props}: {props:GameChoiceProps}){
    const navigator = useNavigate();
    
    return(
        <div className="gameChoiceContainer" onClick={() => UpdateGame(props.chanceOfSuccess,props.gameInfo,props.setGameInfo,navigator)}>
            <p>{props.option}---{props.chanceOfSuccess}</p>
        </div>
    );
}

export default GameChoice;