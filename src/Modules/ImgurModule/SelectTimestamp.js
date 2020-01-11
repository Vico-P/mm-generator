import React from 'react';
import { useSelector } from 'react-redux'

function SelectTimestamp() {
  const username = useSelector(state => state.user.username);
  // const token = useSelector(state => state.user.token);

  return (
    <div className="select-timestamp">
      Hello { username || '' }!
      <br />Welcome to mm-generator.
    </div>
  );
}

export default SelectTimestamp;