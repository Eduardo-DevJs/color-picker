import { useState } from "react";
import "./App.css";
import { cores } from "./util/cores";

function App() {
  const [background, setBackground] = useState('');

  const eyeDropper = new EyeDropper();

  function colorPicker(){
    eyeDropper.open()
    .then((result) =>{
      setBackground(result.sRGBHex)
    })
    .catch((err)=>{
      console.error(err)
    })
  }


  return (
    <div className="container">
      <main className="main">
        <div style={{background}} className="circle"></div>

        <ul className="colors">
          {cores.map((cor, index) => (
            <li key={index} className="item-color" style={{background: cor}}></li>
          ))}
        </ul>
        <h2>HEX: <span>{background}</span></h2>
        <button onClick={colorPicker} className="buttonColorPicker">Conta gotas</button>
      </main>
    </div>
  );
}

export default App;
