import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostTimestamp from './PostTimestamp';
import PostImages from './PostImages';
import './PostGenerator.css';

function PostGenerator() {
  const timestampList = useSelector(state => state.items.timestamp);
  const imagesList = useSelector(state => state.items.lines);
  const [toGenerate, setToGenerate] = useState({ message: ""});
  const [templateGenerated, setTemplateGenerated] = useState([]);

  const generatePost = () => {
    let result = [];
    console.log(timestampList);
    timestampList.forEach((timestamp) => {
      result.push("[" + timestamp.name + "](" + timestamp.link + ")");
    });
    if (imagesList.length > 0) {
      result.push("|name|timestamp|description|price");
      result.push("|-|-|-|-");
      imagesList.forEach((image) => {
        result.push("|" + image.name + "| [" + image.imgName + "] (" + image.imgUrl + ")|" + image.desc + "|" + image.price + "");
      });
    }
    result.push("" + toGenerate.message + "");
    setTemplateGenerated(result);
  }

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
      <button
        className="btn btn-secondary"
        onClick={() => {generatePost()}}>
        Generate post template
      </button>
      {templateGenerated.map((row, index) => {
        return (
          <div key={index}>
            {row}
          </div>
        );
      })}
    </div>
  );
}

export default PostGenerator;
