import React, {
	useState,
	useReducer,
	useEffect,
	createContext,
} from "react";
import axios from "axios";
import { OrderReducer } from "../Reducers/orderReducer";
import { apiUrl } from "./content";

export const Ordercontext =
	createContext();
const Ordercontextprovider = ({
	children,
}) => {
	const [
		cartstate,
		dispatch,
	] = useReducer(
		 OrderReducer,
		{
			orderloading: true,
			order:[],
		}
	);

// 	const addorder =
// 		async infoitem => {

// 			try {
// 				const res =
// 					await axios.post(
// 						`${apiUrl}/cart/order`,
// 						infoitem
//                     );
//                 console.log(res)
// 				if(res.data.success){
					
// 				 	dispatch({type:'ADD_ORDER',
// 				 	payload:res.data.savedcart})
// 				}
// 				return res.data;
// 			} catch (error) {
// console.log(error);
// 			}
// 		};
	
	//get cart
	const getorder =
		async () => {
			try {
				const res =
					await axios.get(
						// `${apiUrl}/cart/find`
					);
				if (
					res.data.success
				) {
					// console.log(res.data.rescart)
					// dispatch({
					// 	type: "GET_CART",
					// 	payload:
					// 		res.data
					// 			.rescart,
					// });
				}

				return res.data
					
			} catch (error) {
				console.log(error);
			}
		};
		//update item cart
	
	//delete cart
	const deleteorder = async (_id) => {
			
			try{
				const res= await axios.delete (`${apiUrl}/cart/${_id}`)
				console.log(res.data)
				dispatch({type:"DELETE_CART",payload:res.data.resdeletproduct})
				return res.data.resdeletproduct
				

			}catch(err){
console.log(err)
			}
	}

	const orderdata = {
		//addorder,
	};

	return (
		<Ordercontext.Provider
			value={orderdata}>
			{children}
		</Ordercontext.Provider>
	);
};

export default Ordercontextprovider;
