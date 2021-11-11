import { createContext, useReducer, useEffect,useState } from "react";
import axios from 'axios'
import { ProductReducer } from "../reducer/productionreduce";
import{apiUrl, LOCAL_STOGARE_TOKEN_NAME} from './contents'
import setaxiostoken from "../axiostken/axiostoken";


export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(ProductReducer, {
		productLoading: false,
		products: []
	})

  
 
    

  
    

    const addproduct = async (userForm) => {
        try {

            const response = await axios.post(`${apiUrl}/post`, userForm)
            

           
         
          
        } catch (error) {
            
            return error.response.data
            
        }
        
    }
     

    

   
    // update user
    const updateuser = async(formupdate) => {
        
       
    }

    


    const AuthContextData = {}
    return (
        <ProductContext.Provider value={AuthContextData}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;