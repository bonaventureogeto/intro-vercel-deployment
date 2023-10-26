const Counter = ({count, handleDecrement, handleIncrement}) => {

    return (
      <>
        <h1>Wecome to my Count App</h1>
        <h2>{count}</h2>
        {
            count > 10 ? <h2>You are kinder famous</h2> : <h2>Go get likes!</h2>
        }
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    );
}

export default Counter;