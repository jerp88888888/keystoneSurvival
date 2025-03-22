import * as React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './pages/Game';
import './App.css'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
