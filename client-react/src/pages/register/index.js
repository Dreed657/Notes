import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';
import axios from 'axios';

import PageLayout from '../../components/page-layout';
import Input from '../../components/input';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9999/auth/register', {
                email,
                username,
                password,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });

        console.log('Data: ', { username, password, email });
    };

    return (
        <PageLayout>
            <div className="w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center">Register</h1>
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        id="username"
                        className="my-2"
                    />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        id="email"
                        className="my-2"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        id="password"
                        className="my-2"
                    />
                    <Button color="primary" title="Register!" className="my-2">
                        Register
                    </Button>
                </Form>
            </div>
        </PageLayout>
    );
};

export default RegisterPage;
