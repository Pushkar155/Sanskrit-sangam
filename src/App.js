import './App.css';
import Home from './components/home/Home';
import Unit from './components/UnitPage/Unit';
import Questions from './components/Questions/Questions';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/unit" element={<Unit/>}/>
        <Route exact path="/ques" element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
