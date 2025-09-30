// title, description, amount and button !
import './Menu.css';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/cart-slice';

const Menu =()=>{
    const dispatch = useDispatch();
    const addToCartHandler = (product) =>{
        dispatch(
            cartActions.addItemToCart({
                id: product.id,
                title: product.title,
                price: product.price,
            })
        )
    }
    const data=[
        {   id: "p1",
            title:"Test1",
            description: "This is the first product! you must try to experience the goodness of that product",
            price:50,
        },
        {   id: "p2",
            title:"Test2",
            description: "This is the second product! you must try to experience the goodness of that product",
            price:100,
        }]
    return(<>
        <h2>Buy Your Favorite Product</h2>
        { data.map((product)=>
        <div className="menu-items" key={product.id}>
            <div className='div-1'>
                <h3 id="prod-title">{product.title}</h3>
                <p className='amount'>₹ {product.price}</p>
            </div>

            <div className='div-2'>
                <p id="desc">{product.description}</p>
            </div>
            <button id='add-cart-btn' onClick={() => addToCartHandler(product)}>Add to cart</button>
        </div>)}
    </>)
}
export default Menu;