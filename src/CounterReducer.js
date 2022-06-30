import React, { useReducer } from 'react';

const initialState = {count: 0};
// 상태가 어떻게 변경될지 reducer라고 지은 함수에 작성
function reducer(state, action) {
    switch(action.type){
        case "INCREASE":
        return {count: state.count+1};
        case "DECREASE":
        return {count: state.count-1};
        default:
        return state;
    }
}
const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count:{state.count}
            <button onClick={() => { dispatch({type: 'INCREASE'})}}>+</button> 
            <button onClick={() => { dispatch({type: 'DECREASE'})}}>-</button> 
        </div>
    );
};

export default CounterReducer;


