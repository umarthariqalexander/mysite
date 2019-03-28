import React, {useState} from 'react';
import './styles.scss';

const Header = ({pageHeaders})=>{
    return(
        <header className="header-wrapper">
            {pageHeaders.map((header, index)=>{
                return(
                        <div className="each-header" key={header+index}>
                            <span>{header}</span>
                        </div>
                );
            })}
        </header>
    );
}

export default Header;