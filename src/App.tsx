import React, { useState } from 'react';
import './App.css';

import { ITitle, Input, ResultDiv, Title } from 'components';

function App() {
  const [bitsText, setBitsText] = useState('');
  const [encodedASCII, setEncodedASCII] = useState('');
  const [encodedBase64, setEncodedBase64] = useState('');
  const [decodedASCII, setDecodedASCII] = useState('');
  const [decodedUTF16, setDecodedUTF16] = useState('');

  const resultInfos: ITitle[] = [
    {
      to: 'bits',
    },
    {
      to: 'bits',
      from: 'ASCII',
      option: 'ENCODE',
    },
    {
      to: 'ASCII',
      from: 'Base64',
      option: 'ENCODE',
    },
    {
      to: 'Base64',
      from: 'ASCII',
      option: 'DECODE',
    },
    {
      to: 'ASCII',
      from: 'UTF-16',
      option: 'DECODE',
    },
  ];

  return (
    <div className="App flex-column">
      <p className="text-2xl mb-5">Text Encoding</p>

      {/* 입력창 */}
      <div className="flex-column gap-1 mb-5">
        <Title to="input" />
        <Input />
      </div>

      {/* 결과값 */}
      <div className="flex-column gap-1">
        {resultInfos.map(({ to, from, option }) => {
          return (
            <div className="flex-column gap-1">
              <Title to={to} from={from} option={option} />
              <ResultDiv text="sdfsdf" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
