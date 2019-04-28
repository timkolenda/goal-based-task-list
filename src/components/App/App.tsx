import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import TaskList from '../../routes/TaskList/TaskList';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={TaskList} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;