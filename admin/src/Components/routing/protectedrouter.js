import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext } from '../../contexts/Authcontext'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from '../Layout/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Siderbar from '../Layout/Siderbar'
const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)

	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<div >

						<Navbar/>
						<Row className='container-fluid'>
							<Col xl={2} className='siderbar' ><Siderbar/></Col>
							<Col>
							<Component {...rest} {...props} />
							</Col>
						</Row>
						
					</div>
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute