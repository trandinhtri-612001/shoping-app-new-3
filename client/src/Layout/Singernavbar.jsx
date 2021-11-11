import React, { useContext,useEffect,useMemo } from 'react'
import './Singernavbar.css'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill, BsSearch } from 'react-icons/bs';
import { Authcontext } from '../Contexts/authcontext';
import { Cartcontext } from '../Contexts/cartcontext';
import {FaUserCircle} from 'react-icons/fa'
const Singernavbar = () => {
    const { authsate: { isauthenticated, user } } = useContext(Authcontext)
    const { cartstate: { carts }, getcart } = useContext(Cartcontext);
  

    return (
        <>{
            isauthenticated ? (
                 <div style={{ display: 'flex' }}>
                    <Nav.Item >
                        <Nav.Link
                            className='font-weight-bolder text-dark username'
                            to='/user/profile'
                            as={Link}
                        >
                            <FaUserCircle className="iconuser" />{user.username}

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Link
                        to='/user/cart'
                        as={Link}>
                        <BsFillCartCheckFill className="Bsfill" />
                        <span>{carts.length}</span>
                    </Nav.Link>
                </div>

            ):(
                <div style={{ display: 'flex' }}>
               
                    <Nav.Item>
                        <Nav.Link
                            className='font-weight-bolder text-dark'
                            to='/login'
                            as={Link}
                        >Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link
                            className='font-weight-bolder text-dark'
                            to='/register'
                            as={Link}
                        >RegisTer</Nav.Link>
                    </Nav.Item>
                   

                </div>
            ) 
      
        }
        </>
    )
}

export default Singernavbar
