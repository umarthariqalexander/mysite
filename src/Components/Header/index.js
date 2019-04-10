import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Header = ({pageHeaders})=>{
    return(
        <header className="header-wrapper">
            <div className="each-header-wrapper">
                {pageHeaders.map((header, index)=>{
                    return(
                            <div className={"each-header "+(header.active ? 'active': '')} key={header.heading+index}>
                                <Link to={header.navLink}>
                                    <span className="header">{header.heading}</span>
                                </Link>
                            </div>
                    );
                })}
            </div>
        </header>
    );
}

export default Header;