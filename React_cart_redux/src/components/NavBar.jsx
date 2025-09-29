import './NavBar.css'

const NavBar = () =>{
    return <nav className='nav-bar'>
        <div className='brand-name'>
            Redux Cart
        </div>
        <button id='my-cart'>My Cart <span id='cart-count'>{1}</span></button>
    </nav>
    
}

export default NavBar;