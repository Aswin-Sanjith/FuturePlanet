/**
 * @component Test
 * @description A simple component that displays "Hello World"
 */
import PropTypes from 'prop-types';

const Test = () => {
  return (
    <div className="container mt-5">
      <p> I want to test the release notes and the workflow, part 2, and the PR number</p>
      <button onClick={() => {
        console.log('Button clicked');
      }}>Click me</button>
    </div>
  );
};

Test.propTypes = {};

export default Test; 