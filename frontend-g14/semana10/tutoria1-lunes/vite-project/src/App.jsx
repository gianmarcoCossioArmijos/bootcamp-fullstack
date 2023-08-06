import { useState } from "react";
import "./App.css";

// Se debe crear el nombre con la primera letra en mayusculas
// Y el archivo debe tener la exrension .jsx
const App = () => {
  const [inputValue, setInputValue] = useState("wheat");

  // HOOK - useState => variable con info inportante
  // Carrito de compras => estado: vacio, lleno
  const handleChange = (event) =>{

    const input = event.target.value;
    setInputValue(input.toLowerCase());
  }

  return (
    <div className="app" style={{backgroundColor: inputValue}}>
      <h3>🌈 Selecciona un color:</h3>
      <input type="text"
            placeholder="Ejm. red"
            onChange={handleChange}
            id="inputColor"
            value={inputValue}
            />

      <h2>{inputValue}</h2>
    </div>
  )
}

export default App;