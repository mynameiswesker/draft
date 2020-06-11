import { createStore } from 'redux';
import { rootReducer } from './Reducers/root';

export const store = createStore(rootReducer);