import React, {Component} from 'react';
import logo from './logo1.svg';

import './App.css';
import Header from './Components/Header/header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Paradise</h2>
                </div>
                <p className="App-intro">
                    started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Header />

            </div>
        );
    }
}

export default App;
