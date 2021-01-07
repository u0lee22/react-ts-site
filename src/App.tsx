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
import {Container} from "@material-ui/core";

function App() {
    return (
        <Container className="App">
            <Router>
                <Sidebar></Sidebar>
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/users" component={Users}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
