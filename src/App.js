import React from 'react';
import './css/App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




import Home from
        "./routes/Home/Home"
import User from
        "./routes/User/User"
import NavBar from "./components/Navbar/Navbar";

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
