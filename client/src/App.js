import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nacbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Protectedrouer from './Components/Router/Protectedrouer';
import Publicrouteisauth from './Components/Router/Publicrouteisauth'
import Home from './Components/home/Home'
import ProductContextProvider from './Contexts/productcontext'
import Detail from './Components/Detail/Detail';
import Production from './Components/Production/Production';
import Authcontextprovider from './Contexts/authcontext';
import Login from './Components/Login/Login'
import RegisterForm from './Components/Register/Register'
import Profile from './Components/Profile/Profile';
import Cartcontextprovider from './Contexts/cartcontext';
import Cart from './Components/Cart/Cart';
import Ordercontextprovider from './Contexts/ordercontext';

const App = () => {
 
    return (
        <div className="App"> 
        <Authcontextprovider>
          <Cartcontextprovider>
            <ProductContextProvider>
              <Ordercontextprovider>
            <Router>
                  <Nacbar />
                 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/product/detail/:id' component={Detail} />
                <Route exact path='/production' component={Production} />
                <Protectedrouer exact path='/login' component={Login} />
                <Protectedrouer exact path='/register' component={RegisterForm} />
                  <Publicrouteisauth exact path='/user/profile' component={Profile} />
                  <Publicrouteisauth exact path='/user/cart' component={Cart}/>

                
            </Switch>
             <Footer/>
             
            </Router>
            </Ordercontextprovider>
        </ProductContextProvider>
        </Cartcontextprovider>
            </Authcontextprovider>
            
            </div>
    )
}

export default App
