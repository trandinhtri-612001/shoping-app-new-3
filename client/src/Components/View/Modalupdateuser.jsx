import React,{useState, useContext,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Authcontext } from '../../Contexts/authcontext';
import Alertmessage from '../View/Alertmessage'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Modalupdateuser = ({ Show, setLgShow }) => {
  const {authsate:{user},updateuser } = useContext(Authcontext)
  const [updateuserdata, setupdateuserdata] = useState({
     _id:user._id,
    username: user.username,
    email: user.email,
    phonenumber: user.phonenumber,
    adress:user.adress,
    password:'',
    confirmpassword:'',
    oldpassword:'',
 })
	
	//  useEffect(()=> setupdatepostdata(postdata),[postdata])


  
	const {username, password,confirmpassword,email, phonenumber, adress, oldpassword } = updateuserdata;
	const onchangeupdatepostform = (e) => {
    console.log(e.target.value);
    
		setupdateuserdata({...updateuserdata,[e.target.name]:e.target.value})
  }
   const [alert, setalert] = useState(null)
  const submitupdateuser = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword   ) {
      setalert({ show:true, message: 'password do not match' })
      setTimeout(() => {
        setalert(null)
     
      }, 3000);


return 0
      
    }
    try {
      const datasp = await updateuser(updateuserdata)
      console.log(datasp)
      if (datasp.success) {
        setalert({ show:true, message: datasp.message })
        
      setTimeout(() => {
        setalert(null)
         setLgShow(false)
      }, 3000);
      } else {
               setalert({ show:true, message:datasp.message })
      setTimeout(() => {
        setalert(null)
      }, 3000);
      }
    } catch (error) {
      return error.messge
    }
  }
  console.log(updateuserdata)
    return (
        <div>
            <Modal
        fullscreen='xxl-down'
        show={Show}
        onHide={()=> setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
          <Modal.Header closeButton>
             <Alertmessage info={alert}/>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update Modal
            </Modal.Title>
            <Alertmessage info={alert}/>
        </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitupdateuser}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>username</Form.Label>
    <Form.Control type="text" name='username' value={username} onChange={onchangeupdatepostform} placeholder="username" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" name='email' value={email} onChange={onchangeupdatepostform} placeholder="email" />
              </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Password</Form.Label>
    <Form.Control type="password"  name='password' value={password}  onChange={onchangeupdatepostform}placeholder="New Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> confirmpassword</Form.Label>
    <Form.Control type="password"  name='confirmpassword' value={confirmpassword}  onChange={onchangeupdatepostform}placeholder="New Password" />
              </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>phonenumber</Form.Label>
    <Form.Control type="text" name='phonenumber' value={phonenumber}  onChange={onchangeupdatepostform} placeholder="Password" />
              </Form.Group>


{/* adress */}




<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Adress </Form.Label>
    <Form.Control type="text" name='adress' value={adress}  onChange={onchangeupdatepostform} placeholder="adress " />
              </Form.Group>


{/* adress */}
               <Form.Group className="mb-3"   controlId="formBasicPassword">
    <Form.Label>oldpassword</Form.Label>
    <Form.Control type="password" name='oldpassword' value={oldpassword} onChange={onchangeupdatepostform} placeholder="oldpassword" />
              </Form.Group>
               
              
              
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
               
             
              
  <Button className="ml-3" variant="primary" type="submit">
   update
        </Button>
              
</Form> 
          </Modal.Body>
           <Button onClick={() => setLgShow(false)}>Close</Button>  
                 <Modal.Footer>
                   
                    
      </Modal.Footer>
        </Modal>
       
        </div>
    )
}

export default Modalupdateuser
