import "./GameChoice.css"
import UpdateArray from "../ts/UpdateArray.ts";
import { GameChoiceProps, GameInfo } from '../ts/classes/classSuport';
import { useNavigate } from 'react-router-dom';

function UpdateGame (chanceOfSuccess: number, gameInfo:GameInfo, setGameInfo:Function, navigator:Function){
    const tmpGameInfo = {};
    const scale = 85;
    //@ts-expect-error
    tmpGameInfo["data"] = gameInfo.data;//@ts-expect-error
    const index = Math.floor(Math.random()*tmpGameInfo.data.length)//@ts-expect-error
    tmpGameInfo["survival"] = gameInfo.survival*chanceOfSuccess/scale;//@ts-expect-error
    tmpGameInfo["event"] = tmpGameInfo.data[index]; //@ts-expect-error
    tmpGameInfo.data = UpdateArray(tmpGameInfo.data,index); //@ts-expect-error
    tmpGameInfo.level = gameInfo.level+1;//@ts-expect-error
    if(tmpGameInfo.level > 10){//@ts-expect-error
        navigator("/Result/"+Math.round(tmpGameInfo.survival));
    }
    else{
        setGameInfo(tmpGameInfo);
    }
    
  }

function GameChoice({props}: {props:GameChoiceProps}){
    const navigator = useNavigate();
    
    return(
        <div className="gameChoiceContainer" onClick={() => UpdateGame(props.chanceOfSuccess,props.gameInfo,props.setGameInfo,navigator)}>
            <p>{props.option}</p>
        </div>
    );
}

export default GameChoice;