/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';
import { useState } from 'react';



const Test = () => {
  const createID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  const [id, setID] = useState(createID());
  return (
    <>
      <button onClick={() => setID(createID())}>Create ID</button>
      <p>ID: {id}</p>
    </>
  );
};

Test.propTypes = {};

export default Test; 