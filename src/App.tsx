import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Game from './pages/Game';
import Result from './pages/Result';
import Home from './pages/Home';
import './App.css'


function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Game" element={<Game />} />
        </Routes>
        <Routes>
          <Route path="/Result/:score" element={<Result />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
