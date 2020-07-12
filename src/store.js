import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import cityWeatherReducer from './reducers/cityWeatherReducer'
import favoriteReducer from './reducers/favoriteReducer';

const store = createStore(
    combineReducers({
        cityWeatherReducer,
        favoriteReducer
    }),
    {},
    applyMiddleware(thunk)
)

export default store;