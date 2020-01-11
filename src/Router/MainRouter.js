import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../Modules/AppModule/App';

const MainRoute = () => (
    <main>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </main>
);

export default MainRoute;