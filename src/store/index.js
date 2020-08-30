import { createStore } from 'redux';

import rootReducer from './modeles/rootReducer';

const store = createStore(rootReducer);

export default store;
