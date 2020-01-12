import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImgDatas, AlbumDatas } from './fakedatas';
import ImgBlock from './ImgBlock';
import AlbumBlock from './AlbumBlock';

function SelectionBlock(props) {
  // store variables
  const token = 'Bearer 2b5da8650f2a98b393bdbabb5f5303cad6b9be86';
  // const token = useSelector(state => state.user.token);
  // state variables
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    if (props.mode === 'img') {
      getUserImages();
    } else if (props.mode === 'album') {
      getUserAlbums();
    }
  }, [props.mode])

  function getUserImages() {
    // fetch('https://api.imgur.com/3/account/me/images', {
    //   mode: 'cors',
    //   headers: {
    //     Authorization: token,
    //   }
    // }).then(oPromise => {
    //   console.log(oPromise);
    //   if (oPromise.ok) {
    //     return oPromise.json();
    //   }
    //   throw new Error(oPromise);
    // }).then(oData => {
    //   const imgs = oData.data.map(data => {
    //     const { link, name } = data;
    //     return {
    //       link,
    //       name
    //     }
    //   });
    //   setImgList(imgs);
    // }).catch(e => {
    //   console.error(e.message || e);
    // })
    setImgList(ImgDatas);
  }

  function getUserAlbums() {
    // fetch('https://api.imgur.com/3/account/me/albums/', {
    //   mode: 'cors',
    //   headers: {
    //     Authorization: token,
    //   }
    // }).then(oPromise => {
    //   console.log(oPromise);
    //   if (oPromise.ok) {
    //     return oPromise.json();
    //   }
    //   throw new Error(oPromise);
    // }).then(oData => {
    //   console.log(oData);
    // }).catch(e => {
    //   console.error(e.message || e);
    // })
    setImgList(AlbumDatas)
  }

  function renderImgs() {
    let render = [];
    imgList.forEach((img, index) => {
      render.push(
        <ImgBlock key={index} img={img} />
      );
    });
    return render;
  }

  function renderAlbum() {
    let render = [];
    imgList.forEach((album, index) => {
      render.push(
        <AlbumBlock key={index} album={ album } />
      );
    });
    return render;
  }

  return (
    <div>
      {
        imgList && (imgList.length > 0) ? (
          <div className="img-container">{props.mode === 'img' ? renderImgs() : renderAlbum() }</div>
        ) : (
          <div>
            No {props.mode === 'img' ? 'image' : 'album' } found
          </div>
        )
      }
    </div>
  );
}

export default SelectionBlock;
