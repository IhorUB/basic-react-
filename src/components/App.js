import React from 'react'
import ArticleList from './ArticleList';
import articles from '../fixtures';
function App() {
    return (
        <div>
            <h1 className="className" id="id" style={{color: 'red'}}>name app</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App