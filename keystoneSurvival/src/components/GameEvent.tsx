import * as React from 'react';
import GameInfo from './GameInfo';
import GameChoice from './GameChoice';
import { GameEventProps } from '../ts/classes/classSuport';

function Shuffle(localOptions:Object[]){
  let index = Math.floor(Math.random()*localOptions.length);
  let copy = [];
  
  for(let i = 0; i<localOptions.length; i++){
    if(index<localOptions.length-1){
      index++
    }
    else{
      index=0;
    }
    copy[index] = localOptions[i];
  }

  return copy;
}
function GameEvent({props}: {props:GameEventProps}) {
  const option0 = {option: props.gameChoices[0].option, chanceOfSuccess: props.gameChoices[0].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo};
  const option1 = {option: props.gameChoices[1].option, chanceOfSuccess: props.gameChoices[1].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo};
  const option2 = {option: props.gameChoices[2].option, chanceOfSuccess: props.gameChoices[2].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo};
  const option3 = {option: props.gameChoices[3].option, chanceOfSuccess: props.gameChoices[3].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo};
  const option4 = {option: props.gameChoices[4].option, chanceOfSuccess: props.gameChoices[4].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo};
  let localOptions = [option0, option1, option2, option3, option4];
  localOptions = Shuffle(localOptions);

  return (
    <>
     <div>
        <GameInfo props={props.gameInfoProps}/>
        <GameChoice props={localOptions[0]}/>
        <GameChoice props={localOptions[1]}/>
        <GameChoice props={localOptions[2]}/>
        <GameChoice props={localOptions[3]}/>
        <GameChoice props={localOptions[4]}/>
        
     </div>
    </>
  )
}

export default GameEvent;
