import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OAuth from '../Modules/OAuth2/OAuth';
import SelectTimestamp from '../Modules/ImgurModule/SelectTimestamp';
import App from '../Modules/AppModule/App';

const MainRoute = () => (
  <main>
    <Switch>
      <Route path="/create-post" component={SelectTimestamp} />
      <Route path="/oauth2" component={OAuth} />
      <Route path="/" component={App} />
    </Switch>
  </main>
);

export default MainRoute;