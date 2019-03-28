import React, { Component } from 'react'
import {ArticleTile} from '../Components';

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [{heading: 'React Hooks'}, {heading: 'React Articture'}]
        }
    }
    render() {
        const {articles} = this.state;
        return (
        <div>
            {articles.map((article, index)=>{
                return(<ArticleTile key={index} article={article} index={index}/>);
            })} 
        </div>
        )
    }
}
