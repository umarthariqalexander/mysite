import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Articles from './Containers/Articles';

const Routes = ()=>{
    return(
        <Switch>
            <Route path="/" component={Articles} />
        </Switch>
    );
}

export default Routes;