import React, {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link , useHistory} from 'react-router-dom'
import { AuthContext } from '../../contexts/Authcontext'
import AlertMessage from '../Layout/alertmessage'
const LoginFrom = () => {
	//context
	const { loginUser ,loadUser} = useContext(AuthContext);
	const history = useHistory();
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
		
		try {
		
			const userdata = await loginUser(loginFrom)
			console.log(userdata)
			if (userdata.success) {
				
			// history.push('/home')
				
			} else {
				setalert({ type: 'danger', message: userdata.message })
				setTimeout(() => {
					setalert(null)
				}, 3000)
			} 
		} catch (error) {
			return error.messge
		}
	}
	



    return (
        <>
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
		
		</>
    )
}

export default LoginFrom