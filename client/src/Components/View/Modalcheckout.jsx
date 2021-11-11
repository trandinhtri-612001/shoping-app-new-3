import React,{useContext,useState} from 'react'
 import Modal from 'react-bootstrap/Modal'
 import Button from 'react-bootstrap/Button'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import { Cartcontext } from '../../Contexts/cartcontext'
import Container from 'react-bootstrap/esm/Container'
import { Authcontext } from '../../Contexts/authcontext'
import Modaladresas from './Modaladresas'
import Image from 'react-bootstrap/Image';



const Modalcheckout = ({show,setshowcheckout,cart,sum}) => {

    console.log(cart);
    const {authsate:{user}}=useContext(Authcontext);
    const [showadress,setshowadress]=useState(false)
    const [adress,setadress]=useState({})
   console.log(adress);
   const {
		getcart,
		cartstate: { carts },
	} = useContext(Cartcontext);
    return (
        <div>
<Modaladresas showadress={showadress}setshowadress={setshowadress} setadress={setadress} />
            <Modal show={show} fullscreen='xxl-down' onHide={()=>setshowcheckout(false) }>
                <Container fluid>
                     <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>dia chi 1</Col>
            </Row>
            <Row className='mt-3'>
                <Col>{adress.yourname}</Col>
                <Col>{adress.phonenumber}</Col>
                <Col xl={6}>{adress.detailadress + '-- (' +adress.tinh +'-'+ adress.huyen+'-'+adress.xa+')'} </Col>
                <Col><Button variant="primary" onClick={()=>setshowadress(true)}>Adress</Button></Col>
            </Row>

            <Row className='mt-5'>
            <Col xl={1}>SAN PHAM</Col>
            <Col xl={5}></Col>
            <Col xl={2}>The loai</Col>
            <Col xl={1}>gia</Col>
            <Col xl={1}>so luong</Col>
            <Col xl={1}></Col>
            <Col xl={1}>thanh tien</Col>
            </Row>
            <div className='mt-5'>
              {cart.map((el)=>{
                return (<Row key={el._id}>
            <Col xl={1}><Image
            src={el.image}

												thumbnail
												className="img_cart"
											/></Col>
            <Col xl={5}>{el.title}</Col>
            <Col xl={2}>{el.color + '+' +el.size}</Col>
            <Col xl={1}>{el.price}</Col>
            <Col xl={1}>{el.quantity}</Col>
            <Col xl={1}></Col>
            <Col xl={1}>{el.score}</Col>
            </Row>)
              })}
            </div>

            <Row className='mt-5'>
              <Col><h1> total: {sum}</h1></Col>
            </Row>
            





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setshowcheckout(false)}>
            Close
          </Button>
          <Button variant="primary" >
            order
          </Button>
        </Modal.Footer>
                </Container>
       
      </Modal>
        </div>
    )
}

export default Modalcheckout
