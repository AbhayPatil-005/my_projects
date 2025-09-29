// title, description, amount and button !
import './Menu.css';
const Menu =()=>{
    const data=
        {
            title:"Test1",
            description: "This is the first product! you must try to experience the goodness of that product",
            amount:50,
        }
    return(<>
        <h2>Buy Your Favorite Product</h2>
        <div className="menu-items">
            <div className='div-1'>
                <h3 id="prod-title">{data.title}</h3>
                <p className='amount'>₹ {data.amount}</p>
            </div>

            <div className='div-2'>
                <p id="desc">{data.description}</p>
            </div>
            <button id='add-cart-btn'>Add to cart</button>
        </div>
    </>)
}
export default Menu;