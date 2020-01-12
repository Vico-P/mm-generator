import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';

function ImgBlock(props) {
  // store variables

  return (
    <div className="img-block">
      <img src={props.img.link} alt={props.img.name} />
      <p>{props.img.name}</p>
    </div>
  );
}

export default ImgBlock;