import React from 'react';
import './SelectTimestamp.css';

function ImgBlock(props) {
  // enregistrer le resultat pour affichage
  function isSelected() {
    let itemIsSelected = false;
    props.storeList.forEach(element => {
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
          () => props.addFunc(props.img)
          : () => props.deleteFunc(props.img.id)
      }
      className={`img-block ${isSelected() ? 'selected' : '' }`}>
      <img src={props.img.link} alt={props.img.name} />
      <p>{props.img.name}</p>
    </div>
  );
}

export default ImgBlock;