import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactLogo from './images/logo.svg';
import './styles/index.scss';
import MainContainer from './Containers/MainContainer';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Welcome to React Self Customized Prototype'
        }
    }
    render(){
        return(
        <div className="App"> 
            <BrowserRouter>
                <MainContainer/>
            </BrowserRouter>
        </div>);
    }
}


ReactDOM.render(<Welcome/>, document.getElementById('app'));