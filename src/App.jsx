import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }


  return (
    <>
      <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count} />
    </>
  );
}

export default App;