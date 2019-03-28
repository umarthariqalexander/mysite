import React from 'react';
import PropType from 'prop-types';

const ArticleTile = ({article})=>{
    return(
        <div>
            {article.heading}
        </div>
    );
};

ArticleTile.prototype = {
    articleList: PropType.array
}

export default ArticleTile;