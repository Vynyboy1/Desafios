import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Rowjs, Columnjs } from "./styles";
import { useState } from "react";
import { Component } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firsNumber, setfirstNumber] = useState("0");
  const [operation, setoperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setfirstNumber("0");
    setoperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firsNumber === "0") {
      setfirstNumber(currentNumber);
      setCurrentNumber("0");
      setoperation("+");
    } else {
      let sum = Number(firsNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setfirstNumber("0");
      setoperation("+");
    }
  };

  const handleRemumbers = () => {
    if (firsNumber === "0") {
      setfirstNumber(currentNumber);
      setCurrentNumber("0");
      setoperation("-");
    } else {
      let rem = Number(firsNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setfirstNumber("0");
      setoperation("-");
    }
  };

  const handlemultumbers = () => {
    if (firsNumber === "0") {
      setfirstNumber(currentNumber);
      setCurrentNumber("0");
      setoperation("*");
    } else {
      let mult = Number(firsNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setfirstNumber("0");
      setoperation("*");
    }
  };

  const handledivNumbers = () => {
    if (firsNumber === "0") {
      setfirstNumber(currentNumber);
      setCurrentNumber("0");
      setoperation("/");
    } else {
      let mult = Number(firsNumber) / Number(currentNumber);
      setCurrentNumber(String(mult));
      setfirstNumber("0");
      setoperation("/");
    }
  };

  const handleEquals = () => {
    if (firsNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleRemumbers();
          break;
        case "*":
          handlemultumbers();
          break;
        case "/":
          handledivNumbers();
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Rowjs>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="/" onClick={handledivNumbers} />
          <Button label="C" onClick={handleClear} />
          <Button label="x" onClick={handlemultumbers} />
        </Rowjs>
        <Rowjs>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleRemumbers} />
        </Rowjs>
        <Rowjs>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Rowjs>
        <Rowjs>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Rowjs>
      </Content>
    </Container>
  );
};

export default App;
