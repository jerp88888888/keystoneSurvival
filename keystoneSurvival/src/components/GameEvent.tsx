import * as React from 'react';
import GameInfo from './GameInfo';
import GameChoice from './GameChoice';
import { GameEventProps } from '../ts/classes/classSuport';


function GameEvent({props}: {props:GameEventProps}) {
  console.log("Game Event Props");
  console.log(props);

  return (
    <>
     <div>
        <GameInfo props={props.gameInfoProps}/>
        <GameChoice props={{option: props.gameChoices[0].option, chanceOfSuccess: props.gameChoices[0].chanceOfSuccess}}/>
        <GameChoice props={{option: props.gameChoices[1].option, chanceOfSuccess: props.gameChoices[1].chanceOfSuccess}}/>
        <GameChoice props={{option: props.gameChoices[2].option, chanceOfSuccess: props.gameChoices[2].chanceOfSuccess}}/>
        <GameChoice props={{option: props.gameChoices[3].option, chanceOfSuccess: props.gameChoices[3].chanceOfSuccess}}/>
        <GameChoice props={{option: props.gameChoices[4].option, chanceOfSuccess: props.gameChoices[4].chanceOfSuccess}}/>
     </div>
    </>
  )
}

export default GameEvent;
