import React from 'react';
import './InputStyle.css';

interface IInput {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const Input = ({ onChange }: IInput) => {
  return (
    <textarea
      className="input"
      placeholder="텍스트를 입력해주세요"
      onChange={onChange}
    />
  );
};
