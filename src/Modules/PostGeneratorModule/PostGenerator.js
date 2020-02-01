import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostTimestamp from './PostTimestamp';
import FoldableBlock from '../MiscModule/FoldableBlock';
import './PostGenerator.css';

function PostGenerator() {
  const timestampListLength = useSelector(state => state.items.timestamp.length);

  const [arrayPost, setArrayPost] = useState({
    urlTimestamp: '',
    urlName: '',
    images: [],
    message: '',
  });

  const rows = [];

  const handleChange = (newValue, field, index) => {
    if (index || index === 0) {
      let newArray = [...arrayPost.images];
      newArray[index][field] = newValue;
      arrayPost.images = newArray;
    } else {
      arrayPost[field] = newValue;
    }
    setArrayPost(Object.assign({}, arrayPost));
  };

  const addNewLine = () => {
    arrayPost.images = [...arrayPost.images, {
      index: arrayPost.images.length,
      name: '',
      imgUrl: '',
      imgName: '',
      desc: '',
      price: 12
    }];
    setArrayPost(Object.assign({}, arrayPost));
  };

  arrayPost.images.forEach((row) => {
    rows.push(
      <tr key={row.index}>
        <td>
          <div>Name</div>
          <input
            className="form-control"
            value={row.name} onChange={(event) => { handleChange(event.target.value, "name", row.index) }} type="text" />
        </td>
        <td>
          <div>Img</div>
          <input
            className="form-control"
            value={row.imgUrl}
            onChange={(event) => { handleChange(event.target.value, "imgUrl", row.index) }}
            type="text" placeholder="Put image's url here"
          />
          <input
            className="form-control"
            value={row.imgName} onChange={(event) => { handleChange(event.target.value, "imgName", row.index) }} type="text" placeholder="Image's name" />
        </td>
        <td>
          <div>Desc</div>
          <textarea
            className="form-control"
            value={row.desc} onChange={(event) => { handleChange(event.target.value, "desc", row.index) }}
            rows="5" cols="33" placeholder="Quick description of product...">
          </textarea>
        </td>
        <td>
          <div>Price</div>
          <input
            className="form-control"
            value={row.price} onChange={(event) => { handleChange(event.target.value, "price", row.index) }} type="number" min="0" />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Generate your post</h1>
      <FoldableBlock
        blockTitle={`Timestamp selection ${timestampListLength} item(s) selected`}
        bodyContent={ <PostTimestamp /> }
      />
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div>
        <textarea
          className="form-control"
          value={arrayPost.message}
          onChange={(event) => { handleChange(event.target.value, "message") }}
          rows="5" cols="33" placeholder="If you have more to say..."
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => { addNewLine() }}>
        Add line
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => console.log(arrayPost)}>
        See model content
      </button>
    </div>
  );
}

export default PostGenerator;
