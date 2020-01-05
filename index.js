const redux = require('redux')
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

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

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 10
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCream: state.numOfIceCream - 1
//     }
    
//     default: return state
//   }
// }

//reducer function VV
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }
    
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log("init state", store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()