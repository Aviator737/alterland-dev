import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './components/common/reset-defaults.css';
import './components/common/css/animations.scss';
import './components/common/css/form.scss';

//common components
import ProtectedRoute from './components/common/protectedRoute';

//components
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import Auth from './components/auth';
import Rules from './components/landing/Rules';

export default function App() {

    return (
        <Router>
            <Switch>
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <Route path="/rules" component={Rules}/>
                <Route>
                    <Landing path="/"/>
                    <Route path={['/signup', '/login', '/recovery', '/logout']} component={Auth}/>
                </Route>
            </Switch>
        </Router>
    );
}
