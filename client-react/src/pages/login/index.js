import React, { useState, useContext } from 'react';
import { Form, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import UserContext from '../../coxtext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:9999/auth/login', { username, password })
            .then((res) => {
                context.logIn(res.data)
                history.push('/');
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <PageLayout>
            <div className="w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center">Login</h1>
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        id="username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        id="password"
                    />
                    <Button color="primary" title="Login!" className="my-2">
                        Login
                    </Button>
                </Form>
            </div>
        </PageLayout>
    );
};

export default LoginPage;
