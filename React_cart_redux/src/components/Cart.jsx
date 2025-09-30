import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { cartActions } from './store/cart-slice';

const Cart = () =>{
    const cartItems = useSelector((state)=>state.cart.items);   
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    const removeItemHandler=(id)=>{
        dispatch(cartActions.removeItemFromCart(id))
    }
    const addItemHandler=(item)=>{
        dispatch(cartActions.addItemToCart({
            id: item.id,
            title: item.name,
            price: item.price
        }))
    }

    return(<>{cartItems.length>0 && <div className='your-cart'>
        {cartItems.map((item)=>
        <div className='cart-item' key={item.id}>
            <div className='cart-item-div-1'>
                <h3>{item.name}</h3>
                    <div className='cart-total-price'>
                        <h3>₹{item.totalPrice}</h3><i>(₹{item.price}/item)</i>
                    </div>
            </div>
            <div className='cart-item-div-2'>
                <div>x<span style={{fontWeight:"bolder"}}>{item.quantity}</span></div>
                <div className='btns'>
                <button className='minus-btn' onClick={()=>removeItemHandler(item.id)}>-</button>
                <button className='plus-btn' onClick={()=>addItemHandler(item)}>+</button>
                </div>
            </div>
        </div>)}
            Total Amount: ₹ {totalAmount}
    </div>}</>)
}
export default Cart;