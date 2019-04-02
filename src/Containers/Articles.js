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
        this.navigateToArticle = this.navigateToArticle.bind(this);
    }
    navigateToArticle(){
        this.props.history.push('/article');
    }
    render() {
        const {articles} = this.state;
        return (
        <div className="articles-wrapper">
            {articles.map((article, index)=>{
                return(<ArticleTile key={index} article={article} onClick={this.navigateToArticle} index={index}/>);
            })} 
        </div>
        )
    }
}

export default withRouter(Articles);
