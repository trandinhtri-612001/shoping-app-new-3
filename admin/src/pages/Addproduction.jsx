import React,{useState, useContext, } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link , useHistory} from 'react-router-dom'

import AlertMessage from '../Components/Layout/alertmessage'
const Addproduction = () => {

    
	
	const [loginFrom, setloginFrom] = useState({
		username: '',
		password:''
	})
	const [alert ,setalert] = useState(null)
	const onchangeloginfrom = (event) => {
		setloginFrom({...loginFrom, [event.target.name]: event.target.value})
		//console.log(loginFrom)
	}
	const { username, password } = loginFrom;
	// function login user
	const loginData = async(e) => {
		e.preventDefault()
		
		
		}
	
	


    return (
        <div>
            <Form className='my-4' onSubmit = {loginData}>
                <AlertMessage info={alert}/>
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
						value ={username}
						onChange = {onchangeloginfrom}
					/>
				</Form.Group>
				<Form.Group className= 'my-4'>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required
						value = {password}
						onChange = {onchangeloginfrom}
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Login
				</Button>
			</Form>
		
        </div>
    )
}

export default Addproduction
