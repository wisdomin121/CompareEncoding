import React from 'react';
import './App.css';

import { Input, Title } from 'components';

function App() {
  return (
    <div className="App flex-column">
      <p className="text-2xl mb-5">Text Encoding</p>

      {/* 입력창 */}
      <div className="flex-column gap-1 mb-5">
        <Title to="input" />
        <Input />
      </div>

      {/* 결과값 */}
      <div>
        <Title to="bits" from="ASCII" option="ENCODE" />
      </div>
    </div>
  );
}

export default App;
