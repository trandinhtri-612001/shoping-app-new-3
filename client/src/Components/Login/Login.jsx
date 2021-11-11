import React, { useState, useContext } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link , useHistory} from 'react-router-dom'
import { Authcontext } from '../../Contexts/authcontext'
import AlertMessage from '../View/Alert'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const LoginFrom = () => {
	//context
	const { loginUser,authsate:{isauthenticated} } = useContext(Authcontext);
    const history = useHistory();
    console.log(isauthenticated)
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
				setalert({ type: 'success', message:`${ userdata.message} ,please wait 1 second`  })
				setTimeout(() => {
					
					 history.push('/')
				},3000)
              
				
            } else {
                setalert({ type: 'danger', message: userdata.message })
                setTimeout(() => {
                    setalert(null)
                }, 3000)
            }
        } catch (error) {
            console.log(error)
            setalert({ type: 'danger', message: "failure. intnal server error" })
            setTimeout(() => {
                setalert(null)
            }, 3000)
            return error.messge
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
                            <h2>Login</h2>
                   <Form className='my-4' onSubmit = {loginData}>
                <AlertMessage infor={alert}/>
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
				<Button variant='info' type='submit'>
					Login
				</Button>
			</Form>
			<p>
				Don't have an account?
				<Link to='/register'>
					<Button variant='info' size='sm' className='ml-3'>
						Register
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

export default LoginFrom