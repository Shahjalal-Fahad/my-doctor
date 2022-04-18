import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
import auth from '../../../firebase.init';

// import Loading from '../Loading/Loading';
import Loading from '../../Shared/Loading/Loading';

const CheckOut = () => {
    const navigate=useNavigate()
    const [user, loading, error] = useAuthState(auth);
    // if(user){
    //     // navigate('/checkout')
    // }
    // if(loading){
    //     return <Loading></Loading>
    // }

    return (
        <div className='' style={{height:'100vh'}}>
            <h2>

            Thanks for taking appointment
            </h2>
        </div>
    );
};

export default CheckOut;