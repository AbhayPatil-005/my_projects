import {NavLink} from 'react-router-dom'
const Product = ()=>{
    return <>
    <div>
        <h1>Product Page</h1>
        <NavLink to='/productspage/1'> Product 1</NavLink><br />
        <NavLink to='/productspage/2'> Product 2</NavLink><br />
        <NavLink to='/productspage/3'> Product 3</NavLink>
    </div>
    </>
}
export default Product;