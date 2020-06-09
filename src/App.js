import React, { useState } from 'react';
import './css/App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




import Home from
        "./routes/Home"
import User from
        "./routes/User"
import NavBar from "./Navbar";

function App() {


    return (
        <Router>
            <div className="App">
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/user/:username" component={User}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
