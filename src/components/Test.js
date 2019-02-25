/*
  This is just a component to be imported dynamically in App.js
  input: no
*/
import React from 'react';

class Test extends React.Component {
  render() {
    return (
      <div>
        Hi, I'm imported dynamically on demand
      </div>
    )
  }
}

export default Test;
