import React, { Component } from 'react';

import asyncComponent from './hoc/asyncComponent';
import './App.css';

const AsyncTest = asyncComponent(() => {
  return import('./components/Test')
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncTest />
      </div>
    );
  }
}

export default App;
