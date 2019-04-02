import React, { Component } from 'react';
import {withRouter} from 'react-router';
import '../styles/ArticleView.scss';

class ArticleView extends Component {
  render() {
    return (
      <div className="article-view-wrapper">
        Hey i am article view page
      </div>
    )
  }
}

export default withRouter(ArticleView);