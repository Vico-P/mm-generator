import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SelectionBlock from './SelectionBlock';
import './SelectTimestamp.css';

function AlbumBlock(props) {
    // store variables

    return (
        <div className="img-block">
            <p>{props.album.title}</p>
        </div>
    );
}

export default AlbumBlock;