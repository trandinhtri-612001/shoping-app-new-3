import React, {
	useState,
	useContext,
	useEffect
} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiCategory } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Cartcontext } from "../../Contexts/cartcontext";

function Singerph({ data }) {
	const { addcart,getcart,control } =
		useContext(Cartcontext);
	const inforitem = {
		productid: data._id,
		image: data.image,
		title: data.title,
		color:"black",
		size:"xl",
		price:data.price,
		quantity: 1,
		score:data.price
	
	};
	
	const addtocart =
		async () => {
			
			const resitem =
				await addcart(
					inforitem,
				);

			console.log("addtocart:",
				resitem
			);
			getcart();
			control();
		};
	const red = {
		color: "red",
	};
	useEffect(() => {
	 getcart()
	},[])

	return (
		<div>
			
			<div>
				<Button
					variant="Light"
					size="lg"
					onClick={addtocart}>
					Add to cart
				</Button>
			</div>
			<Button
				variant="Light"
				size="lg"
				to={`/product/detail/${data._id}`}
				as={Link}>
				<BiCategory />
			</Button>
			<Button
				variant="Light"
				size="lg"
				style={red}>
				<AiFillHeart />
			</Button>
		</div>
	);
}

export default Singerph;
