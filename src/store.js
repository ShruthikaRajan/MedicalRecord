import{ createStore} from "redux";


const reducer=(state={counter:0},action)=>{ 
    if(action.type==="INC"){
        return { counter : state.counter}
    } 
    if(action.type==="DEC"){
        return  { counter : state.counter}
    }
    if(action.type === "ADD"){
        return {counter : state.counter + action.payload}
    }
    return state;
    

}
const store=createStore(reducer);
export default store;