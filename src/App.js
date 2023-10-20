import './App.css';
import Home from './components/home/Home';
import Unit from './components/UnitPage/Unit';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/unit" element={<Unit/>}/>
      </Routes>
    </div>
  );
}

export default App;
