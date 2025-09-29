import { useState } from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/cart'

function App() {

  return (
    <>
    <header><NavBar/></header>
    <main>
      <Cart/>
      <Menu/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
