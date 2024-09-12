import React, { useState, useCallback } from 'react';

// create a counter component with increment and decrement function. Pass these function to a childe component which has button to perform the increment and decrement action. Usecallback to ensure that those function are not recreated to every render 

function Temp() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handledcrement = useCallback(() => {
   setCount(count - 1);
 }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onincrement={handleIncrement} ondcrement={handledcrement} />
    </div>
  );
}

function ChildComponent({ onincrement , ondcrement }) {
  return <>
   <button onClick={onincrement}>Increment</button>;
   <button onClick={ondcrement}>dcrement</button>;
  </>
}

export default Temp;