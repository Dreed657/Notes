import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Navigation from './navigation';
import Loader from './components/loader';

import UserContext from './coxtext';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const logIn = ({token, user}) => {
        setUser({
            ...user,
            token,
            loggedIn: true,
        });
        localStorage.setItem('token', token);
    };

    const logOut = () => {
        setUser({
            loggedIn: false,
        });
        localStorage.clear();
        // history.push('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            logOut();
            setLoading(false);
            return;
        }

        axios
            .get('http://localhost:9999/auth/verify', {
                headers: { Authorization: 'Bearer ' + token },
            })
            .then((res) => {
                setUser(res.data.user);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <UserContext.Provider value={{user, logIn, logOut}}>
            <Navigation />
        </UserContext.Provider>
    );
};

export default App;
