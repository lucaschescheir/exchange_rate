import { createStore } from 'redux';

// const BUY = 'BUY';
//
// export function buyAction = {
//     type: buy_one
//     payload:
// }
//
// export function sellAction = {
//     type: sell_one
//     payload:
export const randomAction = {
    type: 'RANDOM',
    payload: 1,
};

export const Doubloons={
    type:'ADD',
    payload: 1
}

export const arrCoins = {
    type: 'SUBTRACT',
    payload: 1,
};


export function reducer(state, action) {
    if(action.type === 'RANDOM'){
        return { rate: Math.floor((Math.random() * 10) + 1),
            arrValue: state.arrValue,
            doubValue: state.doubValue,
        };

        } else if(action.type === 'SUBTRACT'){
    return {
            arrValue: state.arrValue - state.rate,
            doubValue: state.doubValue + 1,
            rate: state.rate
      }


    } else if(action.type === "ADD"){
    return {
        doubValue: state.doubValue - 1,
        rate: state.rate,
        arrValue: state.arrValue + state.rate
    }
}
return state
}
export const store = createStore(reducer, {
    rate: 6,
    arrValue: 0,
    doubValue: 20
},

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
