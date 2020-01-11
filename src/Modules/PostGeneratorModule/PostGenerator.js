import React, { useState } from 'react';
// import { useSelector } from 'react-redux' uncomment when redux-store is ready

function PostGenerator() {
    const [arrayPost, setArrayPost] = useState([]);
    const rows = [];
    const handleChange = (newValue, field, index) => {
      let newArray = [...arrayPost];
      newArray[index][field] = newValue;
      setArrayPost(newArray);
    }
    arrayPost.forEach((row) => {
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
      <table>
        <tbody>
            {rows}
        </tbody>
      </table>
      <button onClick={() => {
        setArrayPost([...arrayPost, {
          index: arrayPost.length,
          name: '',
          imgUrl : '',
          imgName : '',
          desc: '',
          price: 12
        }]);
      }}>
        Ajouter une ligne
      </button>
      <button onClick={() => console.log(arrayPost)}>
        Voir le contenu du tableau
      </button>
      </div>
    );
}

export default PostGenerator;
