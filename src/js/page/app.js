import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';


class App extends Component{
    render(){
        return (<div>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            {this.props.children}
        </div>);
    }
}

const Home = ()=>(
    <div>Home Page</div>
)

const About = ()=>(
    <div>About Page</div>
)

ReactDOM.render((
    
    <HashRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </App>
    </HashRouter>
),document.getElementById('app'));