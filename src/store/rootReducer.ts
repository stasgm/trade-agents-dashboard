import { combineReducers } from 'redux';
// import { Reducer } from 'react';
import userReducer from './userStore/user.reducer';


export const staticReducers = {
  user: userReducer,
}

// const InitialState: 

const rootReducer = combineReducers({
  ...staticReducers
});

// const reducers = staticReducers.user;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;