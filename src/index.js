import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/logo.svg';
import './styles/index.scss';

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
            <header className="App-header">
            <img className="App-logo" src={ReactLogo}/>
            <p> Hey there, {this.state.message}</p>
            </header>
        </div>);
    }
}


ReactDOM.render(<Welcome/>, document.getElementById('app'));