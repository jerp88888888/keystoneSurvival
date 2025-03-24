import { useParams } from 'react-router-dom';
import "./Result.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//@ts-expect-error
import {jokes} from "../db/situationRef.js";

function GetJoke(score:number){
  for(let i = 0; i<jokes.length; i++){
    if(jokes[i].minimumScore < score){
      return jokes[i];
    }
  }

  return jokes[jokes.length-1];
}

function Result() {
  const { score } = useParams(); // Get the 'id' parameter
  let jokeObj = GetJoke(Number(score));
  let src:string = jokeObj.src;
  let joke:string = jokeObj.joke;

  return(
    <>
        <h1>Score: {Math.round(Number(score))}%</h1>
        <h1>{joke}</h1>
        <img src={src} className="imageStyling" alt="Video of animal" />
    </>
  )
}

export default Result;
