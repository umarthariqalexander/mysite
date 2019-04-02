import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {ArticleTile} from '../Components';
import '../styles/Articles.scss';
import ariclesList from '../static/articles';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: ariclesList
        }
    }
    navigateToArticle(articleUrl){
        this.props.history.push({pathname: `/article/${articleUrl}`, state: {articleUrl}});
    }
    render() {
        const {articles} = this.state;
        return (
        <div className="articles-wrapper">
            {articles.map((article, index)=>{
                return(<ArticleTile key={index} article={article} onClick={this.navigateToArticle.bind(this, article.articleUrl)} index={index}/>);
            })} 
        </div>
        )
    }
}

export default withRouter(Articles);
