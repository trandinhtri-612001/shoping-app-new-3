
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/auth/Login'
import AuthContextProvider from './contexts/Authcontext';
import Landing from './Components/Layout/Landing';
import Auth from './Components/view/Auth'
import ProtectedRoute from './Components/routing/protectedrouter'
import Home from './Components/Home/Home';
import User from './pages/User';
import Adduser from './pages/Adduser';
import Production from './pages/Production'
import Addproduction from './pages/Addproduction'
import ProductContextProvider from './contexts/Productioncontext';
function App() {
  return (
    <div className='app'>
      <AuthContextProvider>
     <ProductContextProvider>
          <Router>
             <Switch>
             <Route exact path= '/' component={Landing}/>
                     <Route exact path= '/login' render={props => <Auth {...props} authRoute='login'/>}/>
                    <ProtectedRoute exact path='/home' component={Home} />
                    <ProtectedRoute exact path='/user' component={User}/>
                    <ProtectedRoute exact path='/adduser' component={Adduser} />
                    <ProtectedRoute exact path='/production' component={Production}/>
                    <ProtectedRoute exact path= '/addproduction' component={Addproduction}/>
                </Switch>

    </Router>
    </ProductContextProvider>
      </AuthContextProvider>
      </div>
    
  )
}

export default App;
