import React, { useState } from 'react';
import './App.css';

import { ITitle, Input, ResultDiv, Title } from 'components';
import { encodeDecodeInput } from 'utils';

interface IResultInfos extends ITitle {
  text: string;
}

function App() {
  const [encodedBits, setEncodedBits] = useState('');
  const [encodedASCII, setEncodedASCII] = useState('');
  const [encodedBase64, setEncodedBase64] = useState('');
  const [decodedASCII, setDecodedASCII] = useState('');
  const [decodedUTF16, setDecodedUTF16] = useState('');

  const resultInfos: IResultInfos[] = [
    {
      to: 'bits',
      text: encodedBits,
    },
    {
      to: 'bits',
      from: 'ASCII',
      option: 'ENCODE',
      text: encodedASCII,
    },
    {
      to: 'ASCII',
      from: 'Base64',
      option: 'ENCODE',
      text: encodedBase64,
    },
    {
      to: 'Base64',
      from: 'ASCII',
      option: 'DECODE',
      text: decodedASCII,
    },
    {
      to: 'ASCII',
      from: 'UTF-16',
      option: 'DECODE',
      text: decodedUTF16,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const [
      encodedBits,
      encodedASCII,
      encodedBase64,
      decodedASCII,
      decodedUTF16,
    ] = encodeDecodeInput(e.target.value);

    setEncodedBits(encodedBits);
    setEncodedASCII(encodedASCII);
    setEncodedBase64(encodedBase64);
    setDecodedASCII(decodedASCII);
    setDecodedUTF16(decodedUTF16);
  };

  return (
    <div className="App flex-column">
      <p className="text-2xl mb-5">Text Encoding</p>

      {/* 입력창 */}
      <div className="flex-column gap-1 mb-5">
        <Title to="input" />
        <Input onChange={handleInputChange} />
      </div>

      {/* 결과값 */}
      <div className="flex-column gap-1">
        {resultInfos.map(({ to, from, option, text }, idx) => {
          return (
            <div key={idx} className="flex-column gap-1">
              <Title to={to} from={from} option={option} />
              <ResultDiv text={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
