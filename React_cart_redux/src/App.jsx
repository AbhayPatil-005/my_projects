import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/cart'
import { toggleActions } from './components/store/toggle-slice'
import Notification from './components/Notification'
import { fetchCartData, sendCartData } from './components/store/cart-slice'

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state)=> state.toggleUI.cartIsVisible);
  const notification = useSelector((state) => state.toggleUI.notification);
  const cart = useSelector((state)=>state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (!cart.changed) return;
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(()=>{
    const sendCartData = async()=>{
      dispatch(
        toggleActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      

      dispatch(toggleActions.showNotification({
        status:'success',
        title:'Success!',
        message: 'Sent cart data successfully!',
        })
      );
    } 
    sendCartData().catch((error)=>{
      dispatch(
        toggleActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    })
  }, [cart, dispatch]);

 
  return (
    <>
    {notification && <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}/>}
    <header><NavBar/></header>
    <main>
      {showCart && <Cart/>}
      <Menu/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
