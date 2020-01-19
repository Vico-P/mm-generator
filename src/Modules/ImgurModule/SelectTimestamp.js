import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, deleteItem } from '../../Actions/SelectedItems';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';

function SelectTimestamp() {
  // store variables
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const list = useSelector(state => state.items.list);
  const dispatchAdd = (data) => dispatch(addItem(data));
  const dispatchDelete = (id) => dispatch(deleteItem(id));
  // state variables
  const [sMode, setMode] = useState('img');

  return (
    <div className="select-timestamp">
      Hello {username || ''}!
      <br />Choose your timestamp.
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
        <SelectionBlock
          storeList={list}
          deleteFunc={dispatchDelete}
          addFunc={dispatchAdd}
          mode={sMode}
        />
      </div>
      <Link to="/select-items">Select your items</Link>
    </div>
  );
}

export default SelectTimestamp;