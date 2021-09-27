import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {homeVideosReducer, searchedVideosReducer } from './reducers/videos.reducer';

const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  searchedVideos: searchedVideosReducer,
})

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

 export default store;
