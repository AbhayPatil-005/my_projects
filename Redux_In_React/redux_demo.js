const redux = require('redux');

//reducer function
const counterReducer = (state={counter : 1}, action) => {
        if(action.type==="INCREMENT"){
            return{counter: state.counter + 1}
        }else if(action.type==="DECREMENT"){
            return{counter:state.counter - 1}
        }else if(action.type === "INCREMENTBY2"){
            return{counter: state.counter + 2}
        }else if(action.type === "DECREMENTBY2"){
            return{counter: state.counter - 2}
        }else{
            return state;
        }
};

//store
const store = redux.createStore(counterReducer);

console.log("initial state: ", store.getState())

//subcribe
const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

//dispatch
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"INCREMENTBY2"})
store.dispatch({type:"DECREMENTBY2"})