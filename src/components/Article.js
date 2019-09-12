import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // isOpen: props.defaultOpen,
            count: 0
        }
    }

    // state = {
    //     isOpen: true
    // };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log("mounting");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("receive props");
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate() {
        console.log("update");
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text">{article.text}</section>;
        const style = {width: "50%"};
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        create date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
}

export default Article