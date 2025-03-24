import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Game from './pages/Game';
import Fail from './pages/Fail';
import Success from './pages/Success';
import './App.css'


function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
        <Routes>
          <Route path="/Fail" element={<Fail />} />
        </Routes>
        <Routes>
          <Route path="/Success" element={<Success />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
