import { createStore } from 'redux'
import deviceIdReducer from './reducers/deviceIdReducer'


const store = createStore(deviceIdReducer);

export default store;