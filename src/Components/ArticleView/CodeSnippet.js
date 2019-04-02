import React from 'react';
export default ({children}) => {
    return(
        <code className="code-snippet">
            <pre>
             {children}
            </pre>
        </code>
    );
};