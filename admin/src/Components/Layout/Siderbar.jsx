import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
const Siderbar = () => {
    return (
        <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>User</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Link className='link' to='/user'>full user </Link></td>
    </tr>
    <tr>
      <td><Link className='link' to='/adduser'>add user </Link></td>  
    </tr>
    <tr> 
      <td>Larry the Bird</td>
    </tr>
  </tbody>

  <thead className='mt-3'>
    <tr>
      <th>production</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>   <td><Link className='link' to='/production'>full production </Link></td>  </td>
    </tr>
    <tr>
      <td>   <td><Link className='link' to='/addproduction'>add production </Link></td>  </td>  
    </tr>
    <tr> 
      <td colSpan="2">Larry the Bird</td>
    </tr>
    <tr> 
      <td colSpan="2">Larry the Bird</td>
    </tr>
    <tr> 
      <td colSpan="2">Larry the Bird</td>
    </tr>
  </tbody>
  <thead className='mt-3'>
    <tr>
      <th>admin user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>full admin user</td>
    </tr>
    <tr>
      <td>add admin user</td>  
    </tr>
    <tr> 
      <td colSpan="2">Larry the Bird</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Siderbar
