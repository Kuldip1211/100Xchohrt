import React, { useState, useMemo } from 'react';

function ExpensiveFactorial() {
  const [inputValue, setInputValue] = useState(1); // Initial value set to 1
  const [count, setCount] = useState(0); // Separate state for count

  // Memoize the factorial calculation, it will only recompute when inputValue changes
  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      let ans = 1;
      for (let i = 1; i <= n; i++) {
        ans *= i;
      }
      return ans;
    };

    return calculateFactorial(inputValue);
  }, [inputValue]); // Recompute only when inputValue changes

  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
      setInputValue(val);
    } else {
      setInputValue(1); // Reset to 1 if input is invalid
    }
  };

  return (
    <div>
      <h1>Expensive Factorial Calculation</h1>
      
      <input 
        type="number" 
        placeholder="Enter a number" 
        value={inputValue} 
        onChange={handleChange} 
        min="0" 
      />
      <p>Factorial: {factorial}</p>

      <br />
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <br />
      <button onClick={() => setCount(0)}>
        Reset Count
      </button>
    </div>
  );
}

export default ExpensiveFactorial;
