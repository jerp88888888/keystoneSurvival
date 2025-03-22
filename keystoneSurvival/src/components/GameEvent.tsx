import * as React from 'react';
import GameInfo from './GameInfo';
import GameChoice from './GameChoice';
import { GameEventProps } from '../ts/classes/classSuport';


function GameEvent({props}: {props:GameEventProps}) {

  return (
    <>
     <div>
        <GameInfo props={props.gameInfoProps}/>
        <GameChoice props={{option: props.gameChoices[0].option, chanceOfSuccess: props.gameChoices[0].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo}}/>
        <GameChoice props={{option: props.gameChoices[1].option, chanceOfSuccess: props.gameChoices[1].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo}}/>
        <GameChoice props={{option: props.gameChoices[2].option, chanceOfSuccess: props.gameChoices[2].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo}}/>
        <GameChoice props={{option: props.gameChoices[3].option, chanceOfSuccess: props.gameChoices[3].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo}}/>
        <GameChoice props={{option: props.gameChoices[4].option, chanceOfSuccess: props.gameChoices[4].successRate, gameInfo: props.gameInfo, setGameInfo: props.setGameInfo}}/>
     </div>
    </>
  )
}

export default GameEvent;
