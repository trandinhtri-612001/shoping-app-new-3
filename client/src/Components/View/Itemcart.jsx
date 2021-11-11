import React,{useState,useContext,useEffect} from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Cartcontext } from '../../Contexts/cartcontext';
import Modal from 'react-bootstrap/Modal';
const Itemcart = ({info, fast}) => {

    	const {
		updatecart,deletecart
	} = useContext(Cartcontext);


  

 
    const [size, setsize] =
		useState(info.size);
         const [color, setcolor] =
		useState(info.color);
	const [
		quantity,
		setquntity,
	] = useState(info.quantity);
	const hd = () => {
		setquntity(() =>
				quantity + 1,
		);
	};
	const phd = () => {
		setquntity(() => {
			return quantity < 1
				? 1
				: quantity - 1;
		});
		
		

	};
	const onchangesize = e => {
		setsize(e.target.value);
    };
    	const onchangecolor = e => {
		setcolor(e.target.value);
	};
    // deletecart
	const deletecr = async() => {
			const res = await deletecart(info._id)
		console.log(res)
   
    };
  
    useEffect(async() => {
		let infoupdate = {
			color: color,
			size: size,
			quantity: quantity,
			score:info.price*quantity
	}
    console.log(quantity)
			if (quantity < 1) {
			setshow(true)		
		}
   
 await updatecart(infoupdate,info._id)
	
		
}, [color,size,quantity])
  
		useEffect(() => {
		fast();
		console.log("dsdsdsdsds")
	}, [quantity])
const [show, setshow]= useState(false)	
	const handledl = () => {
		setshow(false)
		hd();
}



    return (
		<>
			<Modal show={show}>
							
  <Modal.Header closeButton onClick={handledl} >
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>you want delete a producttion.</p>
  </Modal.Body>

				<Modal.Footer>
	<Button variant="secondary" onClick={handledl}>Close</Button>
					<Button variant="danger"
						onClick={deletecr}
					>Delete</Button>
  </Modal.Footer>

			</Modal>

           
							
										<td className="pt-3">
											<Form.Select aria-label="Default select example"
                                            value={color}
                                            onChange={onchangecolor}
                                            >
												<option>
													color
												</option>
												<option >
													red
												</option>
												<option>
													orange
												</option>
												<option >
													green
												</option>
												<option >
													black
												</option>
                                                <option >
													gray
                                              </option>
                                                <option >
													white
												</option>
											</Form.Select>
										</td>
								
										<td className="pt-3">
											<Form.Select aria-label="Default select example"
                                            value={size}
                                            onChange={onchangesize}
                                            >
												<option>
													Size
												</option>
												<option >
													m
												</option>
												<option>
													l
												</option>
												<option >
													xl
												</option>
												<option >
													xxl
												</option>
											</Form.Select>
										</td>

										<td className="pt-4">
											$ {info.price}
										</td>

										<td className="pt-3">
											<div className="quantity ">
												<Button
													variant="Link"
													className="p1"
													onClick={
														phd
													}>
													-
												</Button>
												<div>
													<Button
														value={quantity}
														type="input"
														variant="secondary">
														{
															quantity
														}
													</Button>
												</div>
												<Button
													variant="Link"
													onClick={
														hd
													}>
													+
												</Button>
											</div>
										</td>

										<td className="pt-4">
											{info.price*quantity}
										</td>
										<td className="pt-3">
											<Button
                    variant="Link"
                    onClick={deletecr }>
													Delete
												</Button>
										</td>

						
        </>
    )
}

export default Itemcart
