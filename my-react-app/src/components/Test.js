/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';
import { useState } from 'react';



const Test = () => {
  <>
  <input type="text" id="first_name" placeholder="Enter your first name" />
  <input type="text" id="last_name" placeholder="Enter your last name" />
  <input type="text" id="email" placeholder="Enter your email" />
  <input type="text" id="password" placeholder="Enter your password" />
  <button onClick={() => {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(first_name, last_name, email, password);
  }}>Submit</button>
  </>
};

Test.propTypes = {};

export default Test; 