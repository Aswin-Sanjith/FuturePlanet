/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';
import { useState } from 'react';



const Test = () => {
  const [count, setCount] = useState(0);
  const [factorial, setFactorial] = useState(1);
  const factorial = (num) => {
    if (num === 0) return 1;
    return num * factorial(num - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Factorial: {factorial(count)}</p>
    </>
  );
};

Test.propTypes = {};

export default Test; 