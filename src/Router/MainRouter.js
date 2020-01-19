import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OAuth from '../Modules/OAuth2/OAuth';
import SelectTimestamp from '../Modules/ImgurModule/SelectTimestamp';
import SelectItems from '../Modules/ImgurModule/SelectItems';
import App from '../Modules/AppModule/App';
import PostGenerator from '../Modules/PostGeneratorModule/PostGenerator';


const MainRoute = () => (
  <main>
    <Switch>
      <Route exact path="/create-post" component={PostGenerator} />
      <Route exact path="/select-items" component={SelectItems}/>
      <Route exact path="/select-timestamp" component={SelectTimestamp} />
      <Route exact path="/oauth2" component={OAuth} />
      <Route path="/" component={App} />
    </Switch>
  </main>
);

export default MainRoute;
