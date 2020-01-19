import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addUserInfos } from '../../Actions/Token';

/**
 * Component use to load the OAuth2 login informations
 * into the store. This component will only be display for a
 * short period of time.
 */
function OAuth(props) {
  const dispatch = useDispatch();
  const dispatchAdd = (data) => dispatch(addUserInfos(data));

  /**
   * passing an empty array so useEffect is called only when
   * the page is loaded
   */
  useEffect(() => {
    /**
     * regex to match the params and log them
     * [0] group capture
     * [1] param name
     * [2] param value
     */
    const regex = /([^&=]+)=([^&]*)/g;
    // removes the # from the url's Hash
    const sUrlHash = window.location.hash.substring(1);
  
    /**
     * copy the user informations from the URL and
     * send them to the store
     */
    let oNexRegexpResult = regex.exec(sUrlHash);
    let oTokenInfos = {};
    while (oNexRegexpResult) {
      oTokenInfos[oNexRegexpResult[1]] = oNexRegexpResult[2];
      oNexRegexpResult = regex.exec(sUrlHash);
    }
    dispatchAdd(oTokenInfos);
    // redirect to the next page
    props.history.push('/select-timestamp');
  }, []);

  return (
    <div className="oAuth">
      The application is loading please wait...
    </div>
  );
}

export default OAuth;