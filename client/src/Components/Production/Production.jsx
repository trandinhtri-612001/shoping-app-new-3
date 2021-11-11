import React, { useContext,useEffect,useState } from 'react'
import './Production.css'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Singerph from '../View/Singerph';
import { ProductContext } from '../../Contexts/productcontext';
import { Cartcontext } from '../../Contexts/cartcontext';
import Modalert from '../View/Modalert';
const Production = () => {
     const {getcart}= useContext(Cartcontext)
    const { productState: { products }, fullproduct } = useContext(ProductContext)
    useEffect(() => {
         console.log("runffff")
        fullproduct()
       
       getcart();
 
    },[])
    
    const [sortprice, setsortprice] = useState('')
    
    const onchangeprice = (e) => {
        setsortprice((sortprice) => {
            return e.target.value;
        })

    }
 let productss

    
         productss = products.sort((a, b) => {
      return  sortprice === '1' ? b.price-a.price :a.price - b.price
      
    });
    
 
    console.log(products)
    return (
        <div>
            <Container fluid>
                <Modalert/>
                <Row className='mt-5 mb-5'>
                <Col xs={2} className='col_category' >
                    <h4>category Full</h4>

                </Col>
                
                    <Col className="col_sort">
                        <Row className='mt-1 mb-1'>
                            <Col xs={2}><h5 className='mt-2'>Sort To</h5></Col>
                            <Col xs={2}>
                                <Form.Select aria-label="Default select example">
                           <option>size</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                           <option value="3">Three</option>
                               </Form.Select>
                            </Col>
                            <Col xs={2}>
                                <Form.Select aria-label="Default select example">
                           <option>color</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                           <option value="3">Three</option>
                               </Form.Select>
                            </Col>
                            <Col xs={4}></Col>
                            <Col xs={2}>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={onchangeprice}
                                >
                           <option>Price</option>
                        <option value='1'>max to min</option>
                        <option value='2'>Tmin to max</option>
                          
                               </Form.Select>
                             </Col>
                        </Row>
                    </Col>
            </Row>
             <Row className='mt-5 mb-5'>
                <Col xs={2} className='col_category' >
                    <h4>item category</h4>

                </Col>
                
                    <Col >
                        <Row xxl={5 } xl={4} lg={3} md={2 } sm={2} xs={1} className='row-cols-1 row-cols-md-6 g-3 mx-auto mt-3'>
                    {productss.map(productss => {

                        return <Col key={productss._id}  className='my-2'>
                            <div style={
                                {
                                    backgroundImage:`url(${productss.image})`,
                                backgroundSize: "cover",
                                  backgroundRepeat: 'no-repeat'}
                            } className= "img">
                                 
                                <div className= 'issm'>
                                    <Singerph data={productss}  />
                                  </div>
                                 
                                
                            </div>
   
                        </Col>
                        
                    })}
                    
               
            </Row>

            <div className='btn_seemore mt-5'>
                <Button
                    variant="info"
                    // to='/production'
                    // as={Link}
                >See more</Button>
</div>
                    </Col>
           </Row>
            </Container>
            
        </div>
    )
}

export default Production
