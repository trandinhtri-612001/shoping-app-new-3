import React,{useState,useContext,useEffect} from 'react';
import './Products.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import Singerph from './Singerph';
import { ProductContext } from '../../Contexts/productcontext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Modalert from './Modalert';
const Products = () => {
     const {productState:{products},getfullproduct}= useContext(ProductContext)
    useEffect(() => {
       getfullproduct()
 
},[])
    const [data, setdata]=useState(products)
 
    // const data = [
    //     {
    //         _id:1,
    //         backgroundImage: ' url(https://lh3.googleusercontent.com/mu1fNxxqdTs-1XTCt17_Y-6WRh7-oX8BSXv-BWs-AHrsjRGiAdFptbOIDqSLbdo28onsw8VhJ96wPVhQRyHEcVGeW-gs2wB2-TNq3AUjZr6dmj4ohZ8d1y1CZVDoL1AKSbtoPhp0l4yUzVBpSAbyLxF_Osx68A0dAZ430qzmnIu5QEgU0kCZrSTay1AAx0hYU04aSO191rVAiX-Vg6t7RYBCEtoKEogJECi81XAhQQFwuBPF71GNeZBvCnICXLfGCg_5eJRhS_eDeqwYucDKPiNL4k-H__-KqVMUdQeZSzJt0eAVfSZmmrktFxP5hiWwwUDk5ln9TmgWWqOYrr2zP4zfr6IH_seOy-un0YrhQZcQl2VXkb1LF1dy3Ix6syCAUUhiIvPs5abknldyCnouU4U3kBULXIKsjRskgk99arYsqyW15OuASnlnWVbrb_6-BDsaRHWiHqEUOEYcz7t3jWCR99h0yghzHBNnPQlhk8ESzWTQyPppoVmPO9sXlvlA99X9qjtLUq8n9tzn3wfrwM4H21_PfMC-mq3QR6uoR5iJ-tK7NE4z-6zjgoT2B_vwTDAngfuU8UYsHM8e0kYxmcQSVPYzviNr5ogtFaRoGHLkl9Tgi4oUtD28YEPn-T70vIXKlUtZhYA0yvHqkzlC9sf2uLdB0X7DQ87EdS7kN8GMh8f0UaJOawk5mH5aA8Ek3jZvQqfuS8uVCJfNWh8C002x=w294-h635-no?authuser=0)',
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    //     {

    //         _id:2,
    //         backgroundImage: `url(${shirt2})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },

    //     {
    //         _id:3,
    //         backgroundImage: `url(${shirt3})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    //     {
    //         _id:4,
    //         backgroundImage: `url(${shirt4})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    //     {
    //         _id:5,
    //         backgroundImage: `url(${shirt5})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    //     {
    //         _id:6,
    //         backgroundImage: `url(${dress4})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    //     {
    //         _id:7,
    //         backgroundImage: `url(${shirt4})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     },
    // {
    //         _id:8,
    //         backgroundImage: ` url(${shirt1})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: 'no-repeat'

    //     }];

    return (
        <div className='container-fluid'>
<Modalert/>
            <div className=' title_product_list'>
                <h1>Product New Set</h1>
                <p>'Card' is defined but never used</p>
            </div>

             
            <Row xl={4} xs={1} lg={3}sm={ 2} className='row-cols-1 row-cols-md-6 g-3 mx-auto mt-3'  >
                    {products.map(products => {

                        return <Col key={products._id}  className='my-2'>
                            <div style={
                                {
                                    backgroundImage:`url(${products.image})`,
                                backgroundSize: "cover",
                                  backgroundRepeat: 'no-repeat'}
                            } className= "img">
                                 
                                <div className= 'issm'>
                                    <Singerph data={products}  />
                                  </div>
                                 
                                
                            </div>
   
                        </Col>
                        
                    })}
                    
               
            </Row>

            <div className='btn_seemore mt-5'>
                <Button
                    variant="info"
                    to='/production'
                    as={Link}
                >See more</Button>
</div>
            
        </div>
    )
}

export default Products
