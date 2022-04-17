import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
import VerifyEmail from '../VerifyEmail/VerifyEmail';
import Loading from '../Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,sendEmailVerification);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }
    if(loading ){
        return <Loading></Loading>
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        
        
    }
    return (
       

        <div className='register-form'  style={{height:'100vh'}}>
        <h2 style={{textAlign: 'center'}}>Please SignUp</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <input className='' type="submit" value="SignUp" />
        </form>
        <VerifyEmail></VerifyEmail>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
    </div>
    );
};

export default SignUp;