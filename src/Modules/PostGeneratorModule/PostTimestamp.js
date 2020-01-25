import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToTimestamp, deleteItemTimestamp, modifyTimestamp } from '../../Actions/SelectedItemsTimestamp';


    function PostTimestamp() {
  const [idGenerator, setIdGenerator] = useState(new Date().getTime())
  const timestampList = useSelector(state => state.items.timestamp);
  const dispatch = useDispatch();
  const dispatchDelete = (id) => dispatch(deleteItemTimestamp(id));
  const dispatchAdd = (data) => dispatch(addItemToTimestamp(data));
  const dispatchModify = (data) => dispatch(modifyTimestamp(data));

  function handleChange(data) {
    dispatchModify(data);
  }

  function generateTimeStamp() {
    const timeStampsElements = [];

    timestampList.forEach((timestamp, index) => {
      timeStampsElements.push(
        <div className="timestamp-input-block" key={index}>
          <span>Timestamp global</span>
          <input
            type="text" className="form-control"
            defaultValue={timestamp.name || timestamp.title}
            onChange={
              (event) => {
                handleChange({
                  newValue: event.target.value,
                  index,
                  elemToModify: (timestamp.name) ? "name" : "title"
                })
              }
            }
          />
          <span>Name for url</span>
          <input
            type="text" className="form-control"
            defaultValue={timestamp.link}
            onChange={
              (event) => {
                handleChange({
                  newValue: event.target.value,
                  index,
                  elemToModify: "link"
                })
              }
            }
          />
          <span
            className="btn btn-secondary"
            onClick={() => dispatchDelete(timestamp.id)}
          >Delete line</span>
        </div>
      );
    });

    return timeStampsElements;
  }

  function displayStore() {
    const test = [];
    timestampList.forEach((timestamp, index) => {
      test.push(
        <div className="timestamp-input-block" key={`display-${index}`}>
          <span>{`id: ${timestamp.id} name: ${timestamp.title || timestamp.name} link: ${timestamp.link}`}</span>
        </div>
      );
    });

    return test;
  }

  function addNewItem() {
    dispatchAdd({ name: "Timestamp", link: "Link", id: idGenerator });
    setIdGenerator(new Date().getTime());
  }

  return (
    <div>
      <p>Timestamps (prefer to link a unique image or use an album)</p>
      {generateTimeStamp()}
      {displayStore()}
      <button
        className="btn btn-primary"
        onClick={() => addNewItem()}
      >Add timestamp</button>
      <Link to="/">Back to login</Link>
    </div>
  );
}

export default PostTimestamp;
