import React from 'react'
import Login from '../auth/Login'

import './Auth.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Authcontext';
import { Redirect } from 'react-router';
import Spinner from 'react-bootstrap/Spinner'


const Auth = ({authRoute}) => {
	let formbody;
	const { authState: { authLoading, isAuthenticated ,user} } = useContext(AuthContext)
	console.log(isAuthenticated)
	if (authLoading) {
		formbody = (
			<div className="d-flex justify-content-center mt-2">
				<Spinner animation= 'border' variant = 'info'/>
			</div>
		)
	}else if(isAuthenticated) return <Redirect to='/home'/>
	else
formbody = (	
    <>
    {authRoute === 'login' && <Login/>}
    


    </>
)

    return (
        
<div className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className = 'titleapp'>Admin APP</h1>
					<h4>Keep track of what you are learning</h4>
					{formbody}
				</div>
			</div>
		</div>


    
       
    )
}

export default Auth