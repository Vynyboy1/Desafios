import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Rowjs, Columnjs } from "./styles";
import { Component, useState } from "react";

const App = () => {
  const handleClear = () => {
    setCurrentNumber("0");
  };
  const SumNumber = () => {};
  const [currentNumber, setCurrentNumber] = useState(0);
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => ` ${prev} ${number} `);
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Rowjs>
          <Button label="x" onClick={() => handleAddNumber("x")} />
          <Button label="/" onClick={() => handleAddNumber("/")} />
          <Button label="C" onClick={handleClear} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Rowjs>
        <Rowjs>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("-")} />
        </Rowjs>
        <Rowjs>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleAddNumber("+")} />
        </Rowjs>
        <Rowjs>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={() => handleAddNumber("=")} />
        </Rowjs>
      </Content>
    </Container>
  );
};

export default App;
