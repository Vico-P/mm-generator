import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addUserInfos } from '../../Actions/Token';

function OAuth(props) {
  const dispatch = useDispatch();
  // const test = useSelector(state => state.user);
  const dispatchAdd = (data) => dispatch(addUserInfos(data));

  useEffect(() => {
    const regex = /([^&=]+)=([^&]*)/g;
    // remove the # from the url's Hash
    const sUrlHash = window.location.hash.substring(1);
  
    let oNexRegexpResult = regex.exec(sUrlHash);
    let oTokenInfos = {};
  
    while (oNexRegexpResult) {
      oTokenInfos[oNexRegexpResult[1]] = oNexRegexpResult[2];
      oNexRegexpResult = regex.exec(sUrlHash);
    }
    dispatchAdd(oTokenInfos);
    props.history.push('/create-post');
  });



  return (
    <div className="oAuth">
      The application is loading please wait...
    </div>
  );
}

export default OAuth;