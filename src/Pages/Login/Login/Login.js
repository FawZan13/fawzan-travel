import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="my-5 bg-warning py-3 mx-5">
            <h2 className="my-5 text-white">Please Login</h2>
            <Button variant="danger" className="my-4 mb-5 px-5 py-2" onClick={signInUsingGoogle}>Login</Button>
        </div>
    );
};

export default Login;