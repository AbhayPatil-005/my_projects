import { useState } from 'react'
import Modal from './components/modals/Modal';



function App() {
  const [isOpen, setIsOpen] =  useState(false);

  return (
    <div>
      <h1>Creating Modal!</h1>
      <button onClick={()=>setIsOpen(true)}>Open modal</button>
      {isOpen && (
        <Modal onClose={()=>setIsOpen(false)}>
          <h1>Hello from Modal!</h1>
          <p>This is an example of a simple modal</p>
        </Modal>)}
    </div>
  )
}

export default App
