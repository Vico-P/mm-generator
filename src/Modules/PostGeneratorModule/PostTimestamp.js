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
          <p>Image url <a target="_blank" href={timestamp.link}>Preview</a></p>
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
          <p>Alias for url (can be empty)</p>
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
          <div
            className="btn btn-secondary"
            onClick={() => dispatchDelete(timestamp.id)}
          >Delete line</div>
        </div>
      );
    });

    return timeStampsElements;
  }

  function addNewItem() {
    dispatchAdd({ name: "Timestamp", link: "Link", id: idGenerator });
    setIdGenerator(new Date().getTime());
  }

  return (
    <div>
      <div className="timestamp-container">
        {generateTimeStamp()}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => addNewItem()}
      >
        Add timestamp
      </button>
    </div>
  );
}

export default PostTimestamp;
