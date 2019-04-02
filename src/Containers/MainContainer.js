import React, { Component } from 'react'
import Routes from '../routes';
import {Header} from '../Components';
import '../styles/MainContainer.scss';

export default class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageHeaders: [{heading: 'ARTICLES', navLink: '/'},{heading: 'PROJECTS', navLink: '/projects'}, {heading: 'ABOUT ME', navLink: '/about'}, {heading: 'CONTACT', navLink: '/contact'}]
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

