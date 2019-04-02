import React, { Component, lazy, Suspense} from 'react';
import {withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import '../styles/ArticleView.scss';

class ArticleView extends Component {
  componentDidMount(){
    
  }
  render() {
    const ArticleComponent = lazy(() => import(`../Articles/${this.props.location.state.articleUrl}`));  
    return (
      <div className="article-view-wrapper">
        <div className="article-wrapper">
          <Suspense fallback={<div>loading....</div>}>
            <ArticleComponent />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default withRouter(ArticleView);