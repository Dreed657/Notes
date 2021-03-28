import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getToken, removeToken, verify } from './utils/authService';

import Loader from './components/loader';

import ErrorPage from './pages/error';
import HomePage from './pages/home';
import NotePage from './pages/note';
import CreatePage from './pages/create';
import UpdatePage from './pages/update';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const Navigation = () => {
    const token = getToken();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push('/login');
            return;
        }

        verify(token)
            .then((res) => {
                if (res.message.include('expired')) {
                    removeToken();
                    history.push('/login');
                }

                setLoading(false);
            })
            .catch((err) => {
                console.log('Err:', err);
                setLoading(false);
            });
    }, [history]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit/:id" component={UpdatePage} />
            <Route path="/note/:id" component={NotePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default Navigation;
