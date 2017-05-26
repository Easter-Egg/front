import { createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/auth.js';
import promiseMiddleware from '../middleware/promiseMiddleware.js';

export default function(initialState) {
  const enhancer = compose(applyMiddleware(promiseMiddleware));
  return createStore(reducer, initialState, enhancer);
}