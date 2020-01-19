import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToTimestamp, deleteItemTimestamp } from '../../Actions/SelectedItemsTimestamp';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';

function SelectTimestamp() {
  // store variables
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const timestampList = useSelector(state => state.items.timestamp);
  const dispatchAdd = (data) => dispatch(addItemToTimestamp(data));
  const dispatchDelete = (id) => dispatch(deleteItemTimestamp(id));
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
          storeList={timestampList}
          deleteFunc={dispatchDelete}
          addFunc={dispatchAdd}
          mode={sMode}
        />
      </div>
    </div>
  );
}

export default SelectTimestamp;