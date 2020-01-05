const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action ; has a type and property
// {
//   type: BUY_CAKE,
//   info: "first redux action"
// }

//action creator , creates an action, a func that returns a func
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action"
  }
}

function buyicecream() {
  return {
    type: BUY_ICECREAM,
  }
}

//(prevState, action) => newState

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 10
}

//reducer function VV
const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }
    
    default: return state
  }
}

const store = createStore(reducer)
let add = 0
console.log("init state", store.getState());
const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()