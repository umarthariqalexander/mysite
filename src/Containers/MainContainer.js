import React, { Component } from 'react'
import Routes from '../routes';
import {Header} from '../Components';
import '../styles/MainContainer.scss';

export default class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageHeaders: ['ARTICLES', 'PROJECTS', 'ABOUT ME', 'CONTACT']
        };      
    }
    render() {
        return (
        <div className="main-app-wrapper">
            <Header pageHeaders={this.state.pageHeaders}/>
            <Routes />
        </div>
        )
    }
}

