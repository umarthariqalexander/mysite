import React, { Component } from 'react'
import {ArticleTile} from '../Components';
import '../styles/Articles.scss';
import ariclesList from '../static/articles';

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: ariclesList
        }
    }
    render() {
        const {articles} = this.state;
        return (
        <div className="articles-wrapper">
            {articles.map((article, index)=>{
                return(<ArticleTile key={index} article={article} index={index}/>);
            })} 
        </div>
        )
    }
}
