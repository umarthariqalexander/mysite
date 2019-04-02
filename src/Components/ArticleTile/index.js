import React from 'react';
import PropType from 'prop-types';
import './styles.scss';

const ArticleTile = ({article, onClick})=>{
    return(
        <div className="article-tile-wrapper" onClick={onClick}>
            <img className="article-image" src={require(`../../images/${article.bannerImg}`)} />
            <div className="article-heading-wrapper">
                <span className="article-heading">{article.heading}</span>
            </div>
        </div>
    );
};

ArticleTile.prototype = {
    articleList: PropType.array
}

export default ArticleTile;