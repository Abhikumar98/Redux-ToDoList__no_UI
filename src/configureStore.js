import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { saveTolocalstorage, loadState } from './localstorage';

const configureStore = () => {
    
    const initialState = loadState();
    
    const store = createStore(rootReducer, initialState);
    
    store.subscribe(() => saveTolocalstorage({ todos: store.getState().todos }))

    return store;
}

export default configureStore;