import React, { useState } from 'react';
// import { useSelector } from 'react-redux' uncomment when redux-store is ready

function PostGenerator() {
    const [arrayPost, setArrayPost] = useState({
      urlTimestamp: '',
      urlName: '',
      images: [],
      message: '',
    });
    const rows = [];
    const handleChange = (newValue, field, index) => {
      if (index || index === 0) {
        let newArray = [...arrayPost.images];
        newArray[index][field] = newValue;
        arrayPost.images = newArray;
      } else {
        arrayPost[field] = newValue;
      }
      setArrayPost(Object.assign({}, arrayPost));
    };

    const addNewLine = () => {
        arrayPost.images = [...arrayPost.images, {
          index: arrayPost.images.length,
          name: '',
          imgUrl : '',
          imgName : '',
          desc: '',
          price: 12
        }];
        setArrayPost(Object.assign({}, arrayPost));
    };

    arrayPost.images.forEach((row) => {
      rows.push(
        <tr key={row.index}>
          <td>
            <div>Name</div>
            <input value={row.name} onChange={(event) => {handleChange(event.target.value, "name", row.index)}} type="text"/>
          </td>
          <td>
            <div>Img</div>
            <input value={row.imgUrl} onChange={(event) => {handleChange(event.target.value, "imgUrl", row.index)}} type="text" placeholder="Put image's url here"/>
            <input value={row.imgName} onChange={(event) => {handleChange(event.target.value, "imgName", row.index)}} type="text" placeholder="Image's name"/>
          </td>
          <td>
            <div>Desc</div>
            <textarea value={row.desc} onChange={(event) => {handleChange(event.target.value, "desc", row.index)}}
            rows="5" cols="33" placeholder="Quick description of product...">
            </textarea>
          </td>
          <td>
            <div>Price</div>
            <input value={row.price} onChange={(event) => {handleChange(event.target.value, "price", row.index)}} type="number" min="0"/>
          </td>
        </tr>
      );
    });
    return (
      <div>
      <span>Timestamp global</span><input type="text" value={arrayPost.urlTimestamp} onChange={(event) => {handleChange(event.target.value, "urlTimestamp")}}/>
      <span>Name for url</span><input type="text" value={arrayPost.urlName} onChange={(event) => {handleChange(event.target.value, "urlName")}}/>
      <table>
        <tbody>
            {rows}
        </tbody>
      </table>
      <div>
      <textarea value={arrayPost.message} onChange={(event) => {handleChange(event.target.value, "message")}}
      rows="5" cols="33" placeholder="If you have more to say...">
      </textarea>
      </div>
      <button onClick={() => {addNewLine()}}>
        Ajouter une ligne
      </button>
      <button onClick={() => console.log(arrayPost)}>
        Voir le contenu du modèle
      </button>
      </div>
    );
}

export default PostGenerator;
