import {useSelector, useDispatch} from "react-redux";
import './App.css'



function App() {
  const count = useSelector((state)=> state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Counter: {count}</h1>
          <div style={{display:'flex', justifyContent:"space-between", margin:"10px"}}>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
          <button onClick={()=> dispatch({ type: "INCREMENT_BY_5" })}>5+</button>
          <button onClick={()=> dispatch({ type: "DECREMENT_BY_5" })}>5-</button>
          </div>
      </div>
    </>
  )
}

export default App;
