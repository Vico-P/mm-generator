import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';
import { addItemToTimestamp, deleteUserInfos } from '../../Actions/SelectedItemsTimestamp';

function ImgBlock(props) {
  // store variables
  const dispatch = useDispatch();
  const timestampList = useSelector(state => state.items.timestamp);
  const dispatchAdd = (data) => dispatch(addItemToTimestamp(data));
  const dispatchDelete = (id) => dispatch(deleteUserInfos(id));

  // enregistrer le resultat pour affichage
  function isSelected() {
    let itemIsSelected = false;
    timestampList.forEach(element => {
      if (element.id === props.img.id) {
        itemIsSelected = true;
      }
    });
    return itemIsSelected;
  }

  return (
    <div 
      onClick={
        (!isSelected()) ?
          () => dispatchAdd(props.img)
          : () => dispatchDelete(props.img.id)
      }
      className={`img-block ${isSelected() ? 'selected' : '' }`}>
      <img src={props.img.link} alt={props.img.name} />
      <p>{props.img.name}</p>
    </div>
  );
}

export default ImgBlock;