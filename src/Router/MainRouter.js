import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../Modules/AppModule/App';
import PostGenerator from '../Modules/PostGeneratorModule/PostGenerator';


const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path="/create-post" component={PostGenerator} />
            <Route path="/" component={App} />
        </Switch>
    </main>
);

export default MainRoute;
