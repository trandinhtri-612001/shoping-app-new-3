import React, { useState, useContext } from 'react'
import './Register.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link , useHistory} from 'react-router-dom'
import { Authcontext } from '../../Contexts/authcontext'
import AlertMessage from '../View/Alert'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import{ Redirect} from 'react-router-dom';

const RegisterFrom = () => {
	//context
const {registerUser} = useContext(Authcontext)
    const history = useHistory();
	
// data aleat
	 const [Alert, setAlert] = useState(null)
    const [registerform, setregisterform] = useState({
        email: '',
        username: '',
        phonenumber:'',
		password: '',
        confirmPassword: ''
        
	})
	console.log(registerform)

		const { username, password, confirmPassword,email,phonenumber } = registerform
	
	const onchangeregisterform = (e) => {
		setregisterform({ ...registerform, [e.target.name]: e.target.value })
		

	}

	

	const registeruser = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setAlert({ type: 'danger ', message: ' password do not match' })
			setTimeout(() => {
				setAlert(null)
			}, 2000);
			return(0)
		}
		try {
			
				const registerdata = await registerUser(registerform)
			console.log(registerdata)
			if (registerdata.success) {
				setAlert({ type: 'success', message: registerdata.message})
				setTimeout(() => {
					setAlert(null)
					history.push('/login')
				}, 2000);
			} else {
				setAlert({ type: 'danger', message: registerdata.message})
								setTimeout(() => {
					setAlert(null)
				}, 3000);
			}
				
		} catch (error) {
			return error.data.message
		}
	}

	



    return (
        <div>
            <div className="wp_login">
                <Container className="">
                    <Row xl={2} lg={2} sm={1} xs={1}>
                <Col xs={7}>
                    
                    </Col>
                        <Col className="login_form">
                            <h2>Register</h2>
                   <Form className='my-4' onSubmit = {registeruser}>
                                <AlertMessage infor = {Alert}/>
				<Form.Group className='my-4'>
					<Form.Control
						type='email'
						placeholder='Email'
						name='email'
						required
						value={email}
						onChange = {onchangeregisterform}

									/>
				<Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                           </Form.Text>
				</Form.Group>                               
				<Form.Group className='my-4'>
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
						value={username}
						onChange = {onchangeregisterform}

					/>
				</Form.Group>
				<Form.Group className='my-4'>
					<Form.Control
						type='text'
						placeholder='Phone number'
						name='phonenumber'
						required
						value={phonenumber}
						onChange = {onchangeregisterform}

					/>
				</Form.Group>
				<Form.Group className='my-4'>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required
						value = {password}
					onChange = {onchangeregisterform}
					/>
				</Form.Group>
				<Form.Group className= 'my-4'>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						name='confirmPassword'
						required
						value={confirmPassword}
						onChange = {onchangeregisterform}
			
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Register
				</Button>
			</Form>
			<p>
				Already have an account?
				<Link to='/login'>
					<Button variant='info' size='sm' className='ml-2'>
						Login
					</Button>
				</Link>
			</p>
                </Col>
            </Row>
                    </Container>
                 
            </div>
           
			
		</div>
    )
}

export default RegisterFrom