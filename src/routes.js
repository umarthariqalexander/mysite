import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Articles from './Containers/Articles';
import ArticleView from './Containers/ArticleView';

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Articles} />
            <Route path="/article" component={ArticleView} />
        </Switch>
    );
}

export default Routes;