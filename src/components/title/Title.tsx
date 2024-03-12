import React from 'react';
import '../../App.css';
import './TitleStyle.css';

export interface ITitle {
  to: string;
  from?: string;
  option?: 'ENCODE' | 'DECODE';
}

export const Title = ({ to, from, option }: ITitle) => {
  const optionTxt = option ? `[ ${option} ]` : '';
  const toFromTxt = from ? `${to} → ${from}` : to;

  return (
    <div className="flex gap-4">
      <p>{optionTxt}</p>
      <p className="bold">{toFromTxt}</p>
    </div>
  );
};
