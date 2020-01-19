import React from 'react';
import './SelectTimestamp.css';

function AlbumBlock(props) {

  function isSelected() {
    let itemIsSelected = false;
    props.storeList.forEach(element => {
      if (element.id === props.album.id) {
        itemIsSelected = true;
      }
    });
    return itemIsSelected;
  }

  return (
    <div
      className={`album-block ${isSelected() ? 'selected' : ''}`}
      onClick={
        (!isSelected()) ?
          () => props.addFunc(props.album)
          : () => props.deleteFunc(props.album.id)
      }>
      <p>{props.album.title}</p>
    </div>
  );
}

export default AlbumBlock;