import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './features/counter/counterSlice';
import postReducer from './features/post/postSlice';

const logger = createLogger();


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger),
});