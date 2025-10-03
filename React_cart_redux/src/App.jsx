import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/cart'


let isInitial = true;

function App() {
  const showCart = useSelector((state)=> state.toggleUI.cartIsVisible);
  const notification = useSelector((state) => state.toggleUI.notification);

  useEffect(()=>{
    const sendCartData = async()=>{
      dispatch(
        toggleActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response =  await fetch(
        'https://react-project-fd0a2-default-rtdb.firebaseio.com/cart.json',{
          method:'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok){
        throw new Error('Sending cart data failed.');
      }

      dispatch(toggleActions.showNotification({
        status:'success',
        title:'Success!',
        message: 'Sent cart data successfully!',
        })
      );
    } 
  
  if(isInitial){
      isInitial = false;
      return;
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
    {<div className="notification">
      <div>{notification.title}</div>
      <div>{notification.message}</div>
    </div>}
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
