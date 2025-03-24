import * as React from 'react';
import GameEvent from '../components/GameEvent';
import { Option } from '../ts/classes/classSuport';
//@ts-expect-error
import {beaverSituations} from '../db/situationRef.js';
import "./Game.css"
import 'bootstrap/dist/css/bootstrap.min.css';

 function RefineRawData(rawData:object[]){
    const refinedData:object[] = [];

    for(let i = 0; i<rawData.length; i++){
      const eventObject = {};//@ts-expect-error
      eventObject['Event'] = rawData[i]["Event"];//@ts-expect-error
      eventObject['Prompt'] = rawData[i]["Prompt"];//@ts-expect-error
      eventObject['Options'] = [];//@ts-expect-error
      eventObject.Options.push(new Option(rawData[i]["Action 1"], rawData[i]["Success Rate 1"]));//@ts-expect-error
      eventObject.Options.push(new Option(rawData[i]["Action 2"], rawData[i]["Success Rate 2"]));//@ts-expect-error
      eventObject.Options.push(new Option(rawData[i]["Action 3"], rawData[i]["Success Rate 3"]));//@ts-expect-error
      eventObject.Options.push(new Option(rawData[i]["Action 4"], rawData[i]["Success Rate 4"]));//@ts-expect-error
      eventObject.Options.push(new Option(rawData[i]["Action 5"], rawData[i]["Success Rate 5"]));
      refinedData.push(eventObject);
    }
    return refinedData;
 }


function Game() {
  const [gameInfo, setGameInfo] = React.useState({data: RefineRawData(beaverSituations), event: {}, survival: 100, level:0});
  let imgSrc = "";

  

  if(gameInfo.survival>80){
    imgSrc="/img/glacierNationalPark.jpg";
  }
  else if (gameInfo.survival>60){
    imgSrc="/img/niceLandscape.jpg";
  }
  else if (gameInfo.survival>40){
    imgSrc="/img/normal.jpg";
  }
  else if (gameInfo.survival>20){
    imgSrc="/img/almostBaren.jpg";
  }
  else{
    imgSrc="/img/barenLandscape.jpg"
  }

  if(gameInfo.event == undefined || Object.keys(gameInfo.event).length==0){
    console.log(gameInfo);
    const index = Math.floor(Math.random()*gameInfo.data.length);
    const tmpGameInfo = gameInfo;
    tmpGameInfo.event = gameInfo.data[index];
    tmpGameInfo.data = gameInfo.data.slice(index,1);
    setGameInfo(tmpGameInfo);
  }
  else{
    console.log("Event chosen");
  }

  
  

  if(gameInfo.data.length < 1){
    gameInfo.data = RefineRawData(beaverSituations);
    setGameInfo(gameInfo);
  }
  
  
  

  return (
    <>
     <div className='GameContainer' >
        <div className='row'>
          <div className='col col-6'>
            <h2>{Math.round(gameInfo.survival)}%</h2>
          </div>
          <div className='col col-6'>
            <h2>Level: {gameInfo.level}</h2>
          </div>
        </div>
        
        <GameEvent props={
          {gameInfoProps: {//@ts-expect-error
            title: gameInfo.event.Event,
            img: imgSrc,//@ts-expect-error
            description: gameInfo.event.Prompt
          },//@ts-expect-error
          gameChoices: gameInfo.event.Options,
          gameInfo: gameInfo,
          setGameInfo: setGameInfo}
        }/>        
     </div>
    </>
  )
}

export default Game;
