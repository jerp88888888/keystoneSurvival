import * as React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Game from './pages/Game';
import Fail from './pages/Result';
import Success from './pages/Success';
import './App.css'


function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
        <Routes>
          <Route path="/Result/:score" element={<Fail />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
