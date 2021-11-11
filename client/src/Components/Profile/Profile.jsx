import React, { useContext,useState } from 'react';
import { useHistory } from "react-router-dom";
import './Profile.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shirt1 from '../../acess/shirt1.jpg'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { Authcontext } from '../../Contexts/authcontext';
import { MdOutlineSettings } from 'react-icons/md';
import Modalupdateuser from '../View/Modalupdateuser';

const Profile = () => {
    const { logout, authsate: { user } } = useContext(Authcontext);
    const name = user.username.toLocaleUpperCase()
    let history = useHistory();
    const handlelogout = () => {
        logout();
        history.push('/');

    }
     const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <Modalupdateuser Show={lgShow } setLgShow={setLgShow}/>
            <Row xl={3} sm={2} xs={1} className='Profile container-fluid' >
                <Col className="wpimg_profile "xl={3} >
                    <div className='img_profile'>
                       <Image src={shirt1} className='img_pr' roundedCircle/>
                        <h4>{name}</h4>
                   </div>
                </Col>
                 <Col xs={12}  xl={5} className='profile'>
                    <div>
               <Table responsive="sm" className='mt-5'>
                <thead>
                      <tr>
                         <th></th>
                         <th><h4>Profile user</h4></th>
       
                        </tr>
                         <tr>
                  <th>Username :</th>
                  <td>{user.username}</td>
       
                         </tr>
                         <tr>
                       <th>Email :</th>
                                <td>{ user.email}</td>
       
                                </tr>
                                 <tr>
                             <th>PhoneNumber</th>
                                    <td>{user.phonenumber}</td>
       
                                </tr>
                                
                                
                                <tr>
                              <th>Adress :</th>
                                <td>{user.adress}</td>
       
                                </tr>
                                <tr>
                       <th>ID :</th>
                                <td>{ user._id}</td>
       
                                </tr>
                                
                            </thead>
                           
                        </Table>
                    </div>
                </Col>
                 <Col className="setting " sm={12}  >
                    <div >
                      
                    <Table striped  hover responsive="sm" className='mt-5'>
                       <thead>
                  <tr>
                   <th><h4>Category</h4></th>
                    <th></th>
       
                                </tr>
                                 <tr>
                  <th>Setting:</th>
                                    <td>
                     <Button 
                   variant="info"
                       onClick={()=>setLgShow(true)}
                 ><MdOutlineSettings/></Button>
                          </td>
                        </tr>
                        <tr>
                  <th>Logout</th>
                      <td>
                    <Button 
                       variant="danger"
                      onClick={handlelogout}
                  >Logout</Button>
                  </td>
       
                                </tr>
                                 <tr>
        <th>#</th>
        <td>Table heading</td>
       
      </tr>
                            </thead>
                           
                        </Table>
                   </div>
                </Col>
               
            </Row>
            
        </div>
    )
}

export default Profile
