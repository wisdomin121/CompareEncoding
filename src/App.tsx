import React from 'react';
import './App.css';

import { Title } from 'components';

function App() {
  return (
    <div className="App">
      <p className="h1 bold">Text Encoding</p>
      <Title to="bits" from="ASCII" option="ENCODE" />
    </div>
  );
}

export default App;
