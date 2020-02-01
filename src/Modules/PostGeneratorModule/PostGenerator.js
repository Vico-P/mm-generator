import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostTimestamp from './PostTimestamp';
import FoldableBlock from '../MiscModule/FoldableBlock';
import PostImages from './PostImages';
import './PostGenerator.css';

function PostGenerator() {
  const timestampList = useSelector(state => state.items.timestamp);
  const imagesList = useSelector(state => state.items.lines);
  const [toGenerate, setToGenerate] = useState({ messageTimestamp: "", messageImage: ""});
  const [templateGenerated, setTemplateGenerated] = useState([]);

  const generatePost = () => {
    let result = [];
    timestampList.forEach((timestamp, index) => {
      if (timestamp.is_album) {
        result.push("[" + timestamp.title + "](" + timestamp.link + ")\n");
      } else {
        result.push("[" + timestamp.name + "](" + timestamp.link + ")\n");
      }
      if (index === timestampList.length - 1) {
        result.push('\n');
      }
    });
    result.push("" + toGenerate.messageTimestamp + "\n\n");
    if (imagesList.length > 0) {
      result.push("|name|timestamp|description|price\n");
      result.push("|-|-|-|-\n");
      imagesList.forEach((image) => {
          result.push("|" + image.name + "| [" + image.imgName + "] (" + image.imgUrl + ")|" + image.desc + "|" + image.price + "\n");
      });
    }
    result.push("\n\n" + toGenerate.messageImage + "\n");
    setTemplateGenerated(result);
  }

  return (
    <div>
      <h1>Generate your post</h1>
      <FoldableBlock
        blockTitle={`Timestamp selection ${timestampList.length} item(s) selected`}
        bodyContent={ <PostTimestamp /> }
      />
      <div>
        <textarea
          className="form-control"
          value={toGenerate.messageTimestamp}
          onChange={(event) => { setToGenerate(Object.assign({}, toGenerate, {messageTimestamp: event.target.value})) }}
          rows="5" cols="33" placeholder="If you have more to say..."
        />
      </div>
      <FoldableBlock
        blockTitle={`Images selection ${imagesList.length} item(s) selected`}
        bodyContent={ <PostImages /> }
      />
      <div>
        <textarea
          className="form-control"
          value={toGenerate.messageImage}
          onChange={(event) => { setToGenerate(Object.assign({}, toGenerate, {messageImage: event.target.value})) }}
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
      <div>
        <textarea
          value={templateGenerated.join('')}
          rows="5"
          cols="33"
          className="form-control">
        </textarea>
      </div>
    </div>
  );
}

export default PostGenerator;
