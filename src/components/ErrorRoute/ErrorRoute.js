import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorRoute.css'

const ErrorRoute = () => {
    const navigate = useNavigate();
    console.log('Sohag')
    useEffect( ()=>{
        navigate('404');
    },)


    return (
        <div className='notFound'>
            <h1>404. That’s an error.</h1>
        </div>
    );
};

export default ErrorRoute;