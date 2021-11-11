
import React, { useState,useContext,useEffect } from 'react'
import './Home.css'
import Slider from '../View/Slider'
import Timenew from '../View/Timenew'
import Products from '../View/Products'

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Cartcontext } from '../../Contexts/cartcontext';
import Modalert from '../View/Modalert'
const Home = () => {
    const { getcart } = useContext(Cartcontext);
useEffect(() => {
 getcart()
}, [])
    return (
        <div >
           
            <Slider />
            <Timenew />
            
            <Products />
            
            <div className="wp_form">
              <div className="form" >
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <Form>
      <InputGroup isValidation>
 
  <Form.Control type="text"   size ='lg' placeholder='your email'/>
                      
                            <Button type="submit" variant="outline-secondary" className='btn_email'> Send</Button>
                            
                       
</InputGroup>
</Form>
    </div>  
            </div>
            
          
        </div>
    )
}

export default Home

