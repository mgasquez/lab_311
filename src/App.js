import './App.css';
import './styles.css'; 
 
import  { AllDisc } from './AllDisc';
import  { Disc } from './Disc';
import { useState } from "react";
import album from "./data";
function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
       <div>
        <Disc index={index} />
      </div>
      <h1>Select an Album</h1>
      <div> 
          <AllDisc setIndex={setIndex} index={index} />
      </div>


    </div>
  );
}

export default App;
