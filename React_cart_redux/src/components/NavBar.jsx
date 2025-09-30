import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from './store/toggle-slice';

const NavBar = () =>{
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity)
    
    const cartToggleHandler =()=>{
        dispatch(toggleActions.toggle())
    }
    return <nav className='nav-bar'>
        <div className='brand-name'>
            Redux Cart
        </div>
        <button id='my-cart' onClick={cartToggleHandler}>My Cart <span id='cart-count'>{cartQuantity}</span></button>
    </nav>
    
}

export default NavBar;