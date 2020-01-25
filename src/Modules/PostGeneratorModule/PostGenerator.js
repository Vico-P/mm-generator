import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostTimestamp from './PostTimestamp';
import PostImages from './PostImages';
import './PostGenerator.css';

function PostGenerator() {
  const timestampList = useSelector(state => state.items.timestamp);
  const imagesList = useSelector(state => state.items.lines);
  const [toGenerate, setToGenerate] = useState({ message: ""});

  return (
    <div>
      <PostTimestamp />
      <PostImages />
      <div>
        <textarea
          className="form-control"
          value={toGenerate.message}
          onChange={(event) => { setToGenerate(Object.assign({}, toGenerate, {message: event.target.value})) }}
          rows="5" cols="33" placeholder="If you have more to say..."
        />
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => console.log(Object.assign({}, toGenerate, {imagesList, timestampList}))}>
        See model content
      </button>
    </div>
  );
}

export default PostGenerator;
