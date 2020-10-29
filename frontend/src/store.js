import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  videoDetailsReducer,
  videoListReducer,
} from './reducers/VideoReducers';

const reducer = combineReducers({
  videoList: videoListReducer,
});

/* const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initState = {
  cart: { cartItems: cartItemsFromStorage },
}; */

const initState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
