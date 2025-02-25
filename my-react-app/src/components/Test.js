/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';
import { useState } from 'react';



const Test = () => {
  const generateID = (name) => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + name;
  }
  const encryptName = (name) => {
    return name.split('').reverse().join('');
  }
  const [id, setID] = useState(generateID());
  const [name, setName] = useState('');
  return (
    <>
      <input type="text" placeholder="Enter your name" />
      <button onClick={() => {setName(e.target.value); setID(generateID(encryptName(e.target.value)))}}>Submit</button>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
    </>
);
};

Test.propTypes = {};

export default Test; 