import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
const Modaladresas = ({showadress,setshowadress,setadress}) => {
const [adresmd,setadresmd]=useState({})

    const onchangeadress = (e)=>{
        setadresmd({...adresmd,[e.target.name]:e.target.value})
    }
    const submitadress=(e)=>{
        e.preventDefault();
        setadress(adresmd)
    }
    return (
        <div>
            <Modal
    show={showadress}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={submitadress}>
            <Row>
            <Col> <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>your name</Form.Label>
    <Form.Control type="text" name= 'yourname' onChange={onchangeadress} placeholder="your name" />
  </Form.Group></Col>
            <Col>  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>phone number</Form.Label>
    <Form.Control type="text" name='phonenumber' onChange={onchangeadress} placeholder="phone number" />
  </Form.Group></Col>
        </Row>
        <Row>
        <Col> <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>tinh thanh</Form.Label>
    <Form.Control type="text" name= 'tinh' onChange={onchangeadress} placeholder="tinh thanh" />
  </Form.Group></Col>
            <Col> <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>huyen</Form.Label>
    <Form.Control type="text" name= 'huyen' onChange={onchangeadress} placeholder="huyen" />
  </Form.Group></Col>
            <Col>  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>xa/phuong</Form.Label>
    <Form.Control type="text" name='xa' onChange={onchangeadress} placeholder="xa" />
  </Form.Group></Col>
        </Row>
        <Row>
            <Col> <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>detail address</Form.Label>
    <Form.Control type="text" name= 'detailadress' onChange={onchangeadress} placeholder="detail adress" />
  </Form.Group></Col>
            
        </Row>
        <Button type='submit' onClick={()=>{
            setshowadress(false)
        }
        }>add</Button>

</Form>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setshowadress(false)} >Close</Button>
       
      
      </Modal.Footer>
    </Modal> 
        </div>
    )
}

export default Modaladresas
