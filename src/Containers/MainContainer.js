import React, { Component } from 'react'
import Routes from '../routes';
import {Header} from '../Components';
import '../styles/MainContainer.scss';

export default class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageHeaders: [
                {heading: 'ARTICLES', navLink: '/', active: true}, 
                {heading: 'PROJECTS', navLink: '/projects', active: false}, 
                {heading: 'ABOUT ME', navLink: '/about', active: false}, 
                {heading: 'CONTACT', navLink: '/contact', active: false}
            ],
            activePage: '/'
        };      
    }
    static getDerivedStateFromProps({location}, {activePage, pageHeaders}){
        if(location.pathname !== activePage){
            const result = pageHeaders.map(pageHeader =>{
                if(location.pathname === pageHeader.navLink){
                    pageHeader.active = true;
                }
                else if(location.pathname.split('/')[1] === 'article' && pageHeader.heading === 'ARTICLES'){
                    pageHeader.active = true;
                }
                else {
                    pageHeader.active = false;
                }
                return pageHeader;
            });
            return {activePage : location.pathname, pageHeaders: result};
        }
        return null;
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

