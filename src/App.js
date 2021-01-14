import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import "./App.css";

function App() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

  const handleChangeNum1 = (e) => {
    setNumero1(e.target.value);
  };

  const handleChangeNum2 = (e) => {
    setNumero2(e.target.value);
  };

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  return (
    <div className="App">
      <div>
        <TextField
          type="number"
          name="number1"
          label="Ingrese Número 1"
          value={numero1}
          onChange={handleChangeNum1}
        />
      </div>

      <div>
        <TextField
          type="number"
          name="number2"
          value={numero2}
          label="Ingrese Número 2"
          onChange={handleChangeNum2}
        />
      </div>

      <Button variant="contained" color="secondary" onClick={sumar}>
        Sumar
      </Button>

      <div> Resultado: {resultado}</div>
    </div>
  );
}

export default App;
