import React,{useContext,useState} from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { BsFillCartCheckFill,BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Singernavbar from '../Singernavbar';
import { ProductContext } from '../../Contexts/productcontext';
import { useHistory } from 'react-router-dom'; 
const Nacbar = () => {

  let history = useHistory ();
const { productState:{products},search}= useContext(ProductContext);
  const fcsearch=async(e)=>{
   
    e.preventDefault()
const data = await search(query);
history.push ('/search');
 console.log(data);
 console.log(products);
  }
const [query, setquery]= useState('');
const onchangequery=(e)=>{
setquery(e.target.value)

}

    return (
        <>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="">Harry Shoping</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       			<Nav.Link
						className=''
						to='/'
						as={Link}
					>
						Home
					</Nav.Link>
                <Nav.Link
                  to='/production'
                  as={Link}
                >Products</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={fcsearch}>
        <Form.Control
          type="search"
          placeholder="Search"S
          className="me-2"
          aria-label="Search"
          onChange={onchangequery}

        />
         <Button variant="outline-success" type="submit"  >
                 
                    <BsSearch className="Bsearch"/>
                 
          </Button>
              </Form>

              {/* LOGIC */}
             
              <Singernavbar/>
              {/* //LOGIC */}
    </Navbar.Collapse>
  </Container>
</Navbar>



        </>
    )
}

export default Nacbar

