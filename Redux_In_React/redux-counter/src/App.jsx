import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy5, decrementBy5 } from "./store/counterReducer";
import { login, logout } from "./store/store";
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.counter);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isAuthenticated ? (
        <>
          <h2>Please log in to use the counter</h2>
          <button onClick={() => dispatch(login())}>Login</button>
        </>
      ) : (
        <>
          <h1>Counter: {count}</h1>
          <div style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementBy5())}>5+</button>
            <button onClick={() => dispatch(decrementBy5())}>5-</button>
          </div>
          <button style={{ marginTop: "20px" }} onClick={() => dispatch(logout())}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
