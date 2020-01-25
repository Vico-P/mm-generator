import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const clientId = '124f7cd261a8d9a';

  return (
    <div className="App">
      <h1>Welcome to MM-Generator</h1>
      <div className="btns-container">
        <div className="flex-btn">
          <a
            className="btn imgur-login-btn"
            href={`https://api.imgur.com/oauth2/authorize?response_type=token&client_id=${clientId}`}>
            Connect with Imgur
          </a>
        </div>
        <div className="flex-btn">
          <Link to="/create-post">Acces to the app without imgur</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
