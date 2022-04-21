import React from 'react';
import { Button, Container } from 'react-bootstrap';
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
        <div className=" text-center">
            <Container>
                <img height="330px" className="" src="https://i.ibb.co/PQBLW2j/Tablet-login-bro.png" alt="" />
                <h2 className="">Please Login</h2>
                <Button variant="danger" className=" mb-5 px-5 py-2" onClick={handleGoogleSignIn}>Login</Button>
            </Container>
        </div>
    );
};

export default Login;