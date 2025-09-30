import './Cart.css';

const Cart = () =>{

    return(<><div className='your-cart'>
        <div className='cart-item'>
            <div className='cart-item-div-1'>
                <h3>title</h3>
                <div><h3>quantity*amount</h3>(₹amount/item)</div>
            </div>
            <div className='cart-item-div-2'>
                <div>x<h3>quantity</h3></div>
                <div className='btns'>
                <button className='minus-btn'>-</button>
                <button className='plus-btn'>+</button>
                </div>
            </div>
        </div>

    </div></>)
}
export default Cart;