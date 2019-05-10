import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from '../Header/Header';
import TaskList from '../../routes/TaskList/TaskList';
import TaskCreate from '../../routes/TaskCreate/TaskCreate';
import TaskEdit from '../../routes/TaskEdit/TaskEdit';
import TaskDelete from '../../routes/TaskDelete/TaskDelete';

const App = () => {
    return (
        <div data-test="component-app">
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={TaskList} />
                        {/* above path will be a main task list - adding an 'id' should trigger one of any sub lists */}
                        <Route path="/tasks/new" exact component={TaskCreate} />
                        <Route path="/tasks/edit" exact component={TaskEdit} />
                        <Route path="/tasks/delete" exact component={TaskDelete} />
                        {/* Eventually add a page not found route */}
                        {/* <Route component={NotFoundPage} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;