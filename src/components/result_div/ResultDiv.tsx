import React from 'react';
import './ResultDivStyle.css';

interface IResultDiv {
  text?: string;
}

export const ResultDiv = ({ text }: IResultDiv) => {
  return <div className="result-div">{text}</div>;
};
