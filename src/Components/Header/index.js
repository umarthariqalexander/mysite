import React, {useState} from 'react';
import './styles.scss';

const Header = ({pageHeaders})=>{
    return(
        <header className="header-wrapper">
            <div className="each-header-wrapper">
                {pageHeaders.map((header, index)=>{
                    return(
                            <div className="each-header" key={header+index}>
                                <span className="header">{header}</span>
                            </div>
                    );
                })}
            </div>
        </header>
    );
}

export default Header;