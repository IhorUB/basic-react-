import React, {PureComponent} from 'react'
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
class App extends PureComponent{
    state = {
        reverted: false
    };
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3" id="id" style={{color: 'red'}}>App name
                        <button className="btn btn-success" onClick = {this.revert}>Revert</button>
                    </h1>
                    <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
                </div>
            </div>
        )
    }
    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App