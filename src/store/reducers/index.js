import { combineReducers } from 'redux'
import homeReducer from "./home";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';

const rootReducer = combineReducers({
    home: homeReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store