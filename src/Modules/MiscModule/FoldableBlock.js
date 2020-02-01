import React, { useState } from 'react';
import './FoldableBlock.css';

function FoldableBlock(props) {
  const [displayBlock, setDisplayBlock] = useState(true);

  return (
    <div className="foldable-block">
      <div
        className="f-block-header"
        onClick={ () => setDisplayBlock(!displayBlock) }>
        {props.blockTitle}
        <div className={`f-block-sign ${displayBlock ? 'minus' : 'plus'}`}></div>
      </div>
      <div className={`f-block-body ${displayBlock ? '' : 'f-block-hide'}`}>
        { props.bodyContent }
      </div>
    </div>
  );
}

export default FoldableBlock;
