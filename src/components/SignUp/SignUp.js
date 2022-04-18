import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
import VerifyEmail from '../VerifyEmail/VerifyEmail';
import Loading from '../Loading/Loading';
import { Button, Form } from 'react-bootstrap';
import GithubLogin from '../GithubLogin/GithubLogin';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(loading ){
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
    }
    // register
    const handleRegister = event =>{
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        const name=nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        
        
    }
    return (
       

        <div className='register-form'  style={{height:'100vh'}}>
        <h2 style={{textAlign: 'center'}}>Please SignUp</h2>
        <form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={nameRef} type="text" placeholder="Name" required />
                   
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            
        </Form.Group>
           
        <Button variant="primary" type="submit">
                Submit
        </Button>
        </form>
        <GithubLogin></GithubLogin>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
    </div>
    );
};

export default SignUp;