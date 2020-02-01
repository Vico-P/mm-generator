import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLine, deleteLine, modifyLine } from '../../Actions/LinesAction';

function PostImages () {
  const imagesList = useSelector(state => state.items.list);
  const linesList = useSelector(state => state.items.lines);
  const dispatch = useDispatch();
  const dispatchAdd = (newLine) => dispatch(addLine(newLine));
  const dispatchDelete = (indexToDelete) => dispatch(deleteLine(indexToDelete));
  const dispatchModify = (newValue, elemToModify, index) => dispatch(modifyLine({index, newValue, elemToModify}));
  const rows = [];

  imagesList.forEach((imageInfo, index) => {
    if (index >= linesList.length) {
      const imageObject = {
        id: imageInfo.id,
        name: '',
        imgUrl: imageInfo.link,
        imgName: '',
        desc: '',
        price: ''
      };
      if (imageInfo.is_album) {
        imageObject.imgName = imageInfo.title
      } else {
        imageObject.imgName = imageInfo.name;
      }
      dispatchAdd(imageObject);
    }
  });

  linesList.forEach((row, index) => {
    rows.push(
      <tr key={index}>
        <td>
          <div>Name</div>
          <input
            className="form-control"
            value={row.name} onChange={(event) => { dispatchModify(event.target.value, "name", index) }} type="text" />
        </td>
        <td>
          <div>Img</div>
          <input
            className="form-control"
            value={row.imgUrl}
            onChange={(event) => { dispatchModify(event.target.value, "imgUrl", index) }}
            type="text" placeholder="Put image's url here"
          />
          <input
            className="form-control"
            value={row.imgName} onChange={(event) => { dispatchModify(event.target.value, "imgName", index) }} type="text" placeholder="Image's name" />
        </td>
        <td>
          <div>Desc</div>
          <textarea
            className="form-control"
            value={row.desc} onChange={(event) => { dispatchModify(event.target.value, "desc", index) }}
            rows="5" cols="33" placeholder="Quick description of product...">
          </textarea>
        </td>
        <td>
          <div>Price</div>
          <input
            className="form-control"
          value={row.price} onChange={(event) => { dispatchModify(event.target.value, "price", index) }} min="0" />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={() => { dispatchAdd({
          name: '',
          imgUrl: '',
          imgName: '',
          desc: '',
          price: ''
        }); }}>
        Add line
      </button>
    </div>
  );
}

export default PostImages;
