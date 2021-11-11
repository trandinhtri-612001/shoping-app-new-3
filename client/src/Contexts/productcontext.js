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
							`http://localhost:5000/api/post?m=8`
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
							`http://localhost:5000/api/post/find/${_id}`
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
							`http://localhost:5000/api/post`
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

		const productcontextdata =
			{
				getfullproduct,
				productState,
				getproduct,
				product,
				fullproduct,
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
