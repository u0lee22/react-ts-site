import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import About from './pages/About';
import Home from './pages/Home';
import Sidebar from "./parts/Sidebar";

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar></Sidebar>
                <div className="contents">
                    <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/users" component={Users}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
