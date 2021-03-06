import {
	createContext,
	useState,
	useReducer,
	useEffect,
} from "react";
import { apiUrl } from "./content";
import axios from "axios";
import { Productreducer } from "../Reducers/productreducer";

export const ProductContext =
	createContext();

const ProductContextProvider =
	({ children }) => {
		const [
			productState,
			dispatch,
		] = useReducer(
			Productreducer,
			{
				products: [],
				productloading: true,
			}
		);
		const [
			product,
			setproduct,
		] = useState({});
		//get product with query
		const getfullproduct =
			async () => {
				try {
					const resproduct =
						await axios.get(
							`${apiUrl}/post?m=8`
						);
					if (
						resproduct.data
							.success
					) {
						dispatch({
							type: "GET_PRODUCT",
							payload:
								resproduct
									.data
									.resfullPost,
						});
					}
				} catch (error) {
					console.log(error);
				}
			};
		//     useEffect(() => {
		//        getfullproduct()

		// },[])

		//get one product with id
		const getproduct =
			async _id => {
				try {
					const resproduct =
						await axios.get(
							`${apiUrl}/post/find/${_id}`
						);
					if (
						resproduct.data
							.success
					) {
						setproduct(
							resproduct.data
								.resPost
						);
					}
				} catch (error) {
					console.log(error);
				}
			};
		//get full product
		const fullproduct =
			async () => {
				try {
					const resproduct =
						await axios.get(
							`${apiUrl}/post`
						);
					if (
						resproduct.data
							.success
					) {
						dispatch({
							type: "GET_FULL_PRODUCT",
							payload:
								resproduct
									.data
									.resfullPost,
						});
					}
				} catch (error) {
					console.log(error);
				}
			};

			const search=async(query)=>{
				
				try {
					const resproduct =
						await axios.get(
							`${apiUrl}/post/search?search=${query}`
							
						);
					
					if (
						resproduct.data
							.success
					) {
						dispatch({
							type: "SEARCH_PRODUCT",
							payload:
								resproduct
									.data
									.respost,
						});
					}
					return resproduct.data.respost;
				} catch (error) {
					console.log(error.message);
				}
				

			};

		const productcontextdata =
			{
				getfullproduct,
				productState,
				getproduct,
				product,
				fullproduct,
				search
			};
		return (
			<ProductContext.Provider
				value={
					productcontextdata
				}>
				{children}
			</ProductContext.Provider>
		);
	};

export default ProductContextProvider;
