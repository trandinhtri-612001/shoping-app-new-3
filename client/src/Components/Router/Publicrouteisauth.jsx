import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Authcontext } from '../../Contexts/authcontext';;

const Protectedrouer = ({ component: Component, ...rest }) => {
    const { loginUser, authsate: { isauthenticated } } = useContext(Authcontext);
    console.log(isauthenticated)
    return (
        <Route
            {...rest}
            render={props =>
                
                isauthenticated ? (
                 <>
                    <Component {...rest} {...props} />
                </>
            ) : (
                        
                       <Redirect to='/' />
                )
            }
        /> 
            
        
    )
}

export default Protectedrouer;
