import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import dress1 from '../../acess/dress1.jpg';
import dress2 from '../../acess/dress2.jpg';
import dress3 from '../../acess/dress3.jpg';
const slider = () => {

   return (
         <div>
            
            <Carousel variant="dark" interval={2000}>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src={dress1}
      alt="First slide"
    />
    <Carousel.Caption className='text-dark'>
      <h1>First slide label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dress2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Second slide label</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dress3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>Third slide label</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
             </Carousel>
        </div>
    )
}

export default slider
