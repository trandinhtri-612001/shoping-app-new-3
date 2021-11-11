import React,{useState, useContext,memo,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Cartcontext } from '../../Contexts/cartcontext';
const Modalert = ({infor}) => {
     const { show,setshow } = useContext(Cartcontext)
   
    const handleclose = ()=> {
        setshow(false)
       
    }

    return (
        <div>
            <Modal show={show } >
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>production it in cart</p>
  </Modal.Body>

  <Modal.Footer>
                    <Button variant="secondary"
                       onClick={handleclose}
                    >Close</Button>
    
  </Modal.Footer>
</Modal>
        </div>
    )
}

export default Modalert
