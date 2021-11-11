import React, {
	useContext,
	useState,
	useEffect,
} from "react";
import "./Cart.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import shirt1 from "../../acess/shirt1.jpg";
import Form from "react-bootstrap/Form";
import Itemcart from "../View/Itemcart";
import { Cartcontext } from "../../Contexts/cartcontext";
import { ProductContext } from "../../Contexts/productcontext";
import { Ordercontext } from "../../Contexts/ordercontext";
import Modalcheckout from "../View/Modalcheckout";
const Cart = () => {
	const {
		getcart,
		cartstate: { carts },
	} = useContext(Cartcontext);
	const {
		fullproduct,
		productState: {
			products,
		},
	} = useContext(
		ProductContext,
	);
	useEffect(() => {
		getcart();
		fullproduct();
	}, []);

	const {
		addorder
		
	} = useContext(
		Ordercontext
	);

	const shiping = 5.30;
	const shipingdc = 3.20;
	let sum;
	const fast = () => {
	 sum = carts.reduce((sm, el) => {
		const newnub = sm + el.score;
		return newnub

	 }, 0)
		
	}
	fast();
	const cart = carts.slice().reverse();
// checkout
// add order
const [showcheckout, setshowcheckout]= useState(false)

	const checkout = () => {
setshowcheckout(true);

	}

	
	return (
		<div>
			<Container
				fluid
				className="mt-5 mb-5">
					<Modalcheckout show={showcheckout} setshowcheckout={setshowcheckout} cart = {cart} sum={sum}/>
				<Row>
					<Col className="text-center">
						<h1>
							Your Big Cart
						</h1>
					</Col>
				</Row>

				<Row className="mt-3">
					<Col xl={3}>
						<Button
							variant="outline-dark"
							to="/production"
							as={Link}>
							Continue Shoping
						</Button>
					</Col>
					<Col>
						<Row
							className="mt-1"
							className="text-center">
							<Col>
								<p className="border-bottom">
									Shoping bad ({cart.length})
										
								</p>
							</Col>
							<Col>
								{" "}
								<p className="border-bottom">
									Shoping bad
								</p>
							</Col>
						</Row>
					</Col>
					<Col
						xl={3}
						className="text-end">
						<Button variant="dark"
						onClick={checkout}
						>
							Checkout Now
						</Button>
					</Col>
				</Row>

				<Row className="mt-5">
					{/* item cart */}
					<Col xl={9}>
						{/* content */}
						<div>
							<Table responsive="sm">
								<thead>
									<tr>
										<th>TT</th>
										<td>
											production
										</td>
										<td>
											title
										</td>
										<td>
											Color
										</td>
										<td>
											category
										</td>
										<td>
										  price
										</td>

										<td >
											quantity
										</td>
										<td>
											Scores
										</td>
										<td>
											control
										</td>
									</tr>
								</thead>

								<tbody>
									{/* item1 */}
									{cart.map((el,index)=>{
									 return (<tr key={el._id}>
										 <td>{index+1}</td>
										<td>
											<Image
												src={
													el.image
												}
												thumbnail
												className="img_cart"
											/>
										</td>

										<td className="pt-4">
											{el.title}
										</td>
                                   {/* item */}
								  
										 <Itemcart info={el} fast={fast} />

										

										
									</tr>)
									})}

									
								</tbody>
							</Table>
						</div>
					</Col>
					{/* check out */}
					<Col
						xl={3}
						className="border border-dark rounded">
						<Row className="text-center">
							<Col>
								<h3>
									ORDER
									SUMMARY
								</h3>
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<Table
										responsive="sm"
										borderless={
											true
										}>
										<tbody>
											<tr>
												<td>
													Subtotal
												</td>
												<td>
													$ {sum}
												</td>
											</tr>
											<tr>
												<td>
													Estimated
													Shipping
												</td>
												<td>
													$ {shiping}
												</td>
											</tr>
											<tr>
												<td>
													Shipping
													Discount
												</td>
												<td>
													$ {shipingdc}
												</td>
											</tr>

											<tr>
												<th>
													Total
												</th>
												<th>
													$ {sum + shiping - shipingdc}
												</th>
											</tr>
										</tbody>
									</Table>
								</div>
							</Col>
						</Row>
						<Row className="text-center mt-5 ">
							<Button
								variant="secondary"
								classNam="pr-3 pl-3"
							onClick={checkout}>
								<Col>
									CHECKOUT NOW
								</Col>
							</Button>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Cart;
