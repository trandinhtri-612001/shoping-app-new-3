import React,{useState,useEffect, useContext} from 'react'
import './Detail.css'
import shirt3 from '../../acess/shirt3.jpg'
import { useLocation } from "react-router-dom";
import { ProductContext } from '../../Contexts/productcontext'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import { Cartcontext } from '../../Contexts/cartcontext';
import Button from 'react-bootstrap/Button'
import Modalert from '../View/Modalert';
const Detail = () => {
        const { addcart,getcart } =
		useContext(Cartcontext);
    const location = useLocation();
    const _id = location.pathname.split('/')[3]
const {getproduct,product} = useContext(ProductContext)
    useEffect(() => {
        
        getproduct(_id)
    },[])

    const style = {
        backgroundImage: `url(${product.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
    }

    const [quantity, setquntity] = useState(1)
    const hd = () => {
        setquntity((quantity)=> quantity+1)
    }
        const phd = () => {
            setquntity((quantity) => {
           return quantity<1 || quantity === 0 ? 1 : quantity-1
        })
    }
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");
    
    const onchangesize =(e) => {
       setsize(e.target.value)
   }
    const onchangecolor=(e)=>{
      setcolor(e.target.value)
  }
   

    const inforitem = {
        
		
        productid: _id,
        image: product.image,
        title: product.title,
        color: color,
        size: size,
         price:product.price,
        quantity: quantity,
         score:product.price*quantity
	
	};
	const addtocart =
		async () => {
			const resitem =
				await addcart(
					inforitem,
				);
getcart();
			console.log(
				resitem
			);
        };
    
    return (
        <div>
          <Modalert/>

<div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Rounded Chair</h3>
            <h6 className="card-subtitle">globe type chair for rest</h6>
                        <Row className="row">
                       
                <div className="col-lg-5 col-md-5 col-sm-6"  style={style}></div>
               
                <div className="col-lg-7 col-md-7 col-sm-6 ml-3">
                    <h4 className="box-title mt-3">{product.title}</h4>
                                <p>{product.description}</p>
                    <h2 className="mt-5">$
                                    {product.price}
                                    <small className="text-success">(36%off)</small>
                                </h2> 
                                <Form>
                                <div className='wp_formdetail'>
                                   
                                    <div >
                                        
                                        <Form.Select
                                name='color'
                                     className="form_color"
                                               onChange={onchangecolor}  
                                          >
                                            
                      <option>Color</option>
                        <option >trang</option>
                          <option >xam</option>
                          <option >xanh</option>
                         </Form.Select>
                                 
                                </div>
                                <div >                  
                             <Form.Select
                             name="size"
                            className="form_color"
                            onChange={onchangesize}>
                      <option>Size</option>
                        <option >xl</option>
                          <option >m</option>
                          <option >xxl</option>
                         </Form.Select>
                                 
                                </div>
   
                                    </div>
                                </Form>
                                <div className='quantity mt-3'>
                                    <Button
                                        variant="Link"
                                        className='p1'
                                        onClick={phd}
                                    > -</Button>
                                    <div>
                                        <Button value={quantity} type='input' variant="secondary">{ quantity}</Button>
                                    </div>
                                    <Button variant="Link" clasName="p1"
                                         onClick={hd}
                                    >+</Button>


                                </div>    
                             

                    <button className="btn btn-primary btn-rounded mt-5"
                    onClick={addtocart}
                    >Add Cart</button>
                    <h3 className="box-title mt-5">Key Highlights</h3>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check text-success"></i>Sturdy structure</li>
                        <li><i className="fa fa-check text-success"></i>Designed to foster easy portability</li>
                        <li><i className="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Brand</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td>Delivery Condition</td>
                                    <td>Knock Down</td>
                                </tr>
                                <tr>
                                    <td>Seat Lock Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Office Chair</td>
                                </tr>
                                <tr>
                                    <td>Style</td>
                                    <td>Contemporary&amp;Modern</td>
                                </tr>
                                <tr>
                                    <td>Wheels Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Type</td>
                                    <td>Cushion</td>
                                </tr>
                                <tr>
                                    <td>Head Support</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Suitable For</td>
                                    <td>Study&amp;Home Office</td>
                                </tr>
                                <tr>
                                    <td>Adjustable Height</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Model Number</td>
                                    <td>F01020701-00HT744A06</td>
                                </tr>
                                <tr>
                                    <td>Armrest Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Row>
        </div>
    </div>
</div> 
        </div>
    )
}

export default Detail
