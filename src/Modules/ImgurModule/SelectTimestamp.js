import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ImgDatas } from './fakedatas';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';

function SelectTimestamp() {
  // store variables
  const username = useSelector(state => state.user.username);
  // state variables
  const [sMode, setMode] = useState('img');

  return (
    <div className="select-timestamp">
      Hello {username || ''}!
      <br />Welcome to mm-generator.
      <div>
        <div className="btn-container">
          <button
            className="btn btn-secondary mr-2"
            disabled={sMode === 'img'}
            onClick={ () => setMode('img')}
          >Display Images</button>
          <button
            className="btn btn-secondary"
            disabled={sMode === 'album'}
            onClick={() => setMode('album')}
          >Display albums</button>
        </div>
        <SelectionBlock mode={sMode}/>
      </div>
    </div>
  );
}

export default SelectTimestamp;