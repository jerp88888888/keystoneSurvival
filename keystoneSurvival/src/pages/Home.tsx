import * as React from 'react';
//ts-ignore
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function HandleStartGame(navigate){
    navigate("/Game");
}


function Home() { 
  const navigate = useNavigate();

  return (
    <>
        <div>
            <h1>Introduction</h1>
            <p>A keystone species is a living thing that is crucial to it's ecosystem. In this game,
               you will have to make decisions that will effect your chances of survival. If you choose well,
               your chances of survival will increase and your ecosystem will thrive. If you choose poorly, well
               you most likely won't to have to worry about the result to much. When you are ready, select the button 
               below to start the game.
            </p>
            <button className='btn btn-primary' onClick={() => HandleStartGame(navigate)}>Start Game</button>
        </div>

    </>
  )
}

export default Home;
