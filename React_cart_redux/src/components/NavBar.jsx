import './NavBar.css'
import { useDispatch } from 'react-redux';
import { toggleActions } from './store/toggle-slice';

const NavBar = () =>{
    const dispatch = useDispatch();
    
    const cartToggleHandler =()=>{
        dispatch(toggleActions.toggle())
    }
    return <nav className='nav-bar'>
        <div className='brand-name'>
            Redux Cart
        </div>
        <button id='my-cart' onClick={cartToggleHandler}>My Cart <span id='cart-count'>{1}</span></button>
    </nav>
    
}

export default NavBar;