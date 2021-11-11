import React, { createContext, useReducer, useState,useEffect } from 'react';
import axios from 'axios';
import { Authreducer } from '../Reducers/authreducer';
import { LOCAL_STOGARE_TOKEN_NAME } from './content';
import setaxiostoken from './axiostoken';


export const Authcontext = createContext();

const Authcontextprovider = ({ children }) => {
    
    const [authsate, dispatch] = useReducer(Authreducer, {
        auloading: true,
        isauthenticated: false,
        user:null
    });





    const loginUser = async (userForm) => {
        if (!userForm) {
        dispatch({type:"FAILURE",payload:null})
        }
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login',userForm);
            if (res.data.success) {
                localStorage.setItem(LOCAL_STOGARE_TOKEN_NAME, res.data.accsessToken)
                await loaduser();
               
                return res.data
            }
            
        } catch (error) {
             return error.response.data
        }
       
    }

    
    const loaduser = async() => {
        if (!localStorage[LOCAL_STOGARE_TOKEN_NAME]) {
            dispatch({type:"FAILURE",payload:null})
        }
        try {
            setaxiostoken(localStorage[LOCAL_STOGARE_TOKEN_NAME]);
            const resuser = await axios.get('http://localhost:5000/api/auth');
            if (resuser.data.success) {
                dispatch({type:'GET_USER',payload:resuser.data.user})
    console.log(resuser)
            }
            return resuser.data
            
        } catch (error) {
            localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME)
            dispatch({
                type: 'FAILURE',
                payload:null
     
            })
             return error.data
        }
    }
useEffect(() => {
    loaduser();
}, [])
    
    //register

    const registerUser = async (registerForm) => {
        if (!registerForm) {
        dispatch({type:"FAILURE",payload:null})
        }
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register',registerForm);
            if (res.data.success) {

                return res.data
            }
            
        } catch (error) {
             return error.response.data
        }
       
    }

 // update user
    const updateuser = async(formupdate) => {
        
        try {
            const response = await axios.put(`http://localhost:5000/api/auth/${formupdate._id}`, formupdate)
            console.log(response)
            if (response.data.success) {
                
                
            }
              return response.data
    
        } catch (error) {
            return error.response.data
        }
    }
    // logout
    const logout = async () => {
        localStorage.removeItem(LOCAL_STOGARE_TOKEN_NAME);
        dispatch({type:'LOGOUT', payload:null})
    }


    const Authcontextdata = {
        loginUser,
        authsate,
        registerUser,
        logout,
        updateuser
}
    return (
        <Authcontext.Provider value={Authcontextdata}>
            {children}
            
        </Authcontext.Provider>
    )
}

export default Authcontextprovider