/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';

const Test = () => {
  return (
    <div className="container mt-5">
      <h1>Test 1 </h1> 
      <h1>Test 2 </h1> 
    </div>
  );
};

Test.propTypes = {};

export default Test; 