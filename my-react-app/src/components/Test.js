/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';
import { useState } from 'react';



const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};
      <input type="text" placeholder="Enter your name" />
      <button>Click me</button>
    </>
  );
};

Test.propTypes = {};

export default Test; 