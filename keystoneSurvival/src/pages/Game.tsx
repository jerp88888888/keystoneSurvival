import * as React from 'react';
import GameEvent from '../components/GameEvent';
import * as XLSX from 'xlsx';
import { GameEventProps } from '../ts/classes/classSuport';
import { Event, Option } from '../ts/classes/classSuport';
import 'bootstrap/dist/css/bootstrap.min.css';

 



function Game() {
  const [gameInfo, setGameInfo] = React.useState({data: [], event: {}, survival: 100});
  let imgSrc = "";
  let component:React.ReactElement=undefined;
  let gameElementProps:GameEventProps = {};

  // console.log("Game Info below: data, event, survival");
  // console.log("Data below");
  // console.log(gameInfo.data);
  // console.log("Event below");
  // console.log(gameInfo.event);
  // console.log("Survival below");
  // console.log(gameInfo.survival);

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

  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/situationRef.xlsx"); // Load from public folder
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e.target.result) {
          console.error("Error: FileReader result is null.");
          return;
        }
        const workbook = XLSX.read(e.target.result, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // Get first sheet
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to array
        let formattedData = [];
        console.log("Parsed data below");
        console.log(parsedData);
        for(let i = 0; i<parsedData.length; i++){
          if(i==0){
            continue;
          }
          let singleEvent = parsedData[i];
          console.log(singleEvent);
          console.log(singleEvent);
          let anEvent:Event = new Event();
          anEvent.event = singleEvent[0];
          anEvent.prompt = singleEvent[1];
          anEvent.options.push(new Option(singleEvent[2], singleEvent[3]));
          anEvent.options.push(new Option(singleEvent[4], singleEvent[5]));
          anEvent.options.push(new Option(singleEvent[6], singleEvent[7]));
          anEvent.options.push(new Option(singleEvent[8], singleEvent[9]));
          anEvent.options.push(new Option(singleEvent[10], singleEvent[11]));
          formattedData.push(anEvent);
        }
        const index:number = Math.floor(Math.random()*formattedData.length);
        console.log("Index:"+index);
        let tmpGameInfo = gameInfo;
        tmpGameInfo.event = formattedData[index];
        console.log(formattedData);
        formattedData.splice(index,1);
        console.log(formattedData);
        tmpGameInfo.data = formattedData;
        setGameInfo(tmpGameInfo);

      };

      reader.readAsBinaryString(blob);
    };

    fetchData();
  }, []);

  if(gameInfo.data.length > 0){
    gameElementProps = {
      gameInfoProps: {
        title: gameInfo.event.event,
        img: imgSrc,
        description: gameInfo.event.prompt
      },
      gameChoices: gameInfo.event.options};
      
    component = <GameEvent props={gameElementProps}/>
  }

  return (
    <>
     <div className='row'>
        <h2>{gameInfo.survival}%</h2>
        {component}        
     </div>
    </>
  )
}

export default Game;
