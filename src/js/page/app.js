import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import qs from 'qs';
import Home from '../component/Home';
import "antd/dist/antd.css";
import "../../css/index.scss";

let store = createStore(todoApp);
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

/* const Home = ()=>(
    <div>Home Page</div>
) */

const About = ()=>(
    <div>About Page</div>
)

ReactDOM.render(( 
    <Provider store = {store}>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </App>
    </Provider>
),document.getElementById('app'));