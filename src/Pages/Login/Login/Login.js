import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
        // .then(result => {
        //     history.push(redirect_uri);
        // })
    }
    return (
        <div className="my-5 bg-warning py-3 mx-5">
            <h2 className="my-5 text-white">Please Login</h2>
            <Button variant="danger" className="my-4 mb-5 px-5 py-2" onClick={handleGoogleSignIn}>Login</Button>
        </div>
    );
};

export default Login;