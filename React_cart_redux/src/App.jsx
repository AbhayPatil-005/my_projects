import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/cart'

function App() {
  const showCart = useSelector((state)=> state.toggleUI.cartIsVisible);
  return (
    <>
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
