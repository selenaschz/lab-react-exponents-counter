import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Exponent from "./components/Exponent";


function App () {

  //Counter
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const exponents = [2, 3, 4, 5, 6];

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count = {count} decrement = {decrement} increment = {increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {exponents.map( exp => (
          <Exponent key={exp} num = {exp} exponent = {count} />
        ) )}
      </div>
    </div>
  );
}

export default App;
