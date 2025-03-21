import * as React from 'react';
import GameInfo from '../components/GameInfo';
import GameChoice from '../components/GameChoice';

function GameIntro() {
  const example = {title:"Severe Weather Ahead", 
        img:"./img/Example_KeyStone_Selection.jpg", 
        description:"You sense a storm approaching.\nYou only have time to gather enough food for one item.\nWhat item do you gather?"};

  return (
    <>
     <div>
     <GameInfo props={example}/>
      <GameChoice props={{option: "Choice 1",affect: 0.5}}/>
      <GameChoice props={{option: "Choice 2",affect: 0.25}}/>
      <GameChoice props={{option: "Choice 3",affect: 0.75}}/>
      <GameChoice props={{option: "Choice 4",affect: 0}}/>
     </div>
    </>
  )
}

export default GameIntro;
