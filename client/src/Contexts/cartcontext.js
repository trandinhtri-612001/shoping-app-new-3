import React, {
	useState,
	useReducer,
	useEffect,
	createContext,
} from "react";
import axios from "axios";
import { Cartreducer } from "../Reducers/cartreducer";

export const Cartcontext =
	createContext();
const Cartcontextprovider = ({
	children,
}) => {
	const [
		cartstate,
		dispatch,
	] = useReducer(
		Cartreducer,
		{
			cartloading: false,
			carts:[],
		}
		);
	
	const [nation, setnation] = useState(false)
	const [show, setshow] = useState(false)
	
	
	console.log(show)
    const control = () => {
		if (nation) {
			
		}
    }
	const addcart =
		async infoitem => {
			let ex=false;
			const res=cartstate.carts.filter(el => {
				return (el.productid === infoitem.productid
					&& el.size === infoitem.size
					&& el.color === infoitem.color
				) 
				
			})
			console.log(res.length)
			if(res.length != 0){
				
					
				ex = true;
					setshow(true)
				} else {
					
					
					setshow(false)
				}
			
			
			try {
				console.log(ex)
				if (ex) {

				console.log("item it in cart")
				return 0;

			} 


				const res =
					await axios.post(
						"http://localhost:5000/api/cart",
						infoitem
					);
				if(res.data.success){
					
					dispatch({type:'ADD_CART',
					payload:res.data.savedcart})
				}
				return res.data;
			} catch (error) {
console.log(error);
			}
		};
	
	
	//get cart
	const getcart =
		async () => {
			try {
				const res =
					await axios.get(
						"http://localhost:5000/api/cart/find"
					);
				if (
					res.data.success
				) {
					console.log(res.data.rescart)
					dispatch({
						type: "GET_CART",
						payload:
							res.data
								.rescart,
					});
				}

				return res.data
					
			} catch (error) {
				console.log(error);
			}
		};
	useEffect(() => {
		getcart();
		
		
	},[])
		//update item cart
	const updatecart = async (infoupdate,id) => {
		
			try{
				const resupdate = await axios.put(
					`http://localhost:5000/api/cart/${id}`,
					infoupdate

				)
				console.log(resupdate.data.success)
				if (resupdate.data.success) {
					console.log("rekfdf")
					dispatch({type:"UPDATE_CART",payload:resupdate.data.updatedCart})
				}
				
					return resupdate.data

			}catch(err){
console.log(err)
			}
	}
	//delete cart
	const deletecart = async (_id) => {
			
			try{
				const res= await axios.delete (`http://localhost:5000/api/cart/${_id}`)
				console.log(res.data)
				dispatch({type:"DELETE_CART",payload:res.data.resdeletproduct})
				return res.data.resdeletproduct
				

			}catch(err){
console.log(err)
			}
	}

	const cartdata = {
		addcart,
		cartstate,
		getcart,
		updatecart,
		deletecart,
		nation,
		show,
		setshow,
		
	control
	};

	return (
		<Cartcontext.Provider
			value={cartdata}>
			{children}
		</Cartcontext.Provider>
	);
};

export default Cartcontextprovider;
