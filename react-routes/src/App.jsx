import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { NavLink } from 'react-router-dom';
import Product from './components/Product';
import ProductsPage from './components/ProductsPage';

function App() {

  return (
    <>
    <h2>Lets get started!</h2>
      <NavLink to='/homepage' activeClassName="active">Home Page</NavLink> |{" "}
      <NavLink to='/aboutus' activeClassName="active">About Us</NavLink> |{" "}
      <NavLink to='/product' activeClassName="active">Product</NavLink> |{" "}
      
    <div>
      <Switch>
        <Route path='/homepage'>
          <HomePage/>
        </Route>
        <Route path='/aboutus'>
          <AboutUs/>
        </Route>
        <Route path='/productspage/:productId'>
          <ProductsPage/>
        </Route>
        <Route path='/product'>
          <Product/>
        </Route>
      </Switch>
    </div>
      
    </>
  )
}

export default App
