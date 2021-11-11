import React,{useState} from 'react'
import './Timenew.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

import dress1 from '../../acess/dress1.jpg';
import dress2 from '../../acess/dress2.jpg'
import dress3 from '../../acess/dress3.jpg'
import { Link } from 'react-router-dom';
const Timenew = () => {
    
    const data = [
        {
            backgroundImage:` url(${ dress1 })`,
            backgroundSize: "cover",
            backgroundRepeat:'no-repeat'

        },
        {
            backgroundImage: `url(${ dress2 })`,
            backgroundSize: "cover",
            backgroundRepeat:'no-repeat'

        },

        {
            backgroundImage: `url(${ dress3 })`,
            backgroundSize: "cover",
            backgroundRepeat:'no-repeat'

        }
    ]



    return (
        
        <div>
            
            <Container fluid>
                <Row xl={3} xs={1}
                    className='row-cols-1 row-cols-md-6 g-1 mx-auto mt-3'>
                    {data.map(data => {
                        
                        return <Col key={data._id}  className='my-2'>
                            <div style={data} className= "img">
                                 <Button variant="Light" size="lg" className='buttontn'>
                               <Link to='/production' className='text-link'> Shop Now</Link>
                                  </Button>
                            </div>
   
                        </Col>
                        
                    })}
    
   
  </Row>
</Container>
         
        </div>
    )
}

export default Timenew
