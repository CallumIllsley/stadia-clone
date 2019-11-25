import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './Redux/Reducers'
import { compose } from 'redux'

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
    );

export default function configureStore() { 
    const store = createStore(
        rootReducer, {}, enhancers
    )
    return store
}