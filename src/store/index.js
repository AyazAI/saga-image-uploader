import { createStore, applyMiddleware, compose } from 'redux'  
import createSagaMiddleware from 'redux-saga'

import rootSaga from "../sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers"

const configureStore = () => {
    const sagaMIddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...sagaMIddleware)
        )        
    )
    sagaMIddleware.run(rootSaga);
    return store;
}

export default configureStore;