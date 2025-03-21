import * as React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GameIntro from './pages/GameIntro.tsx';
import './App.css'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GameIntro />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
