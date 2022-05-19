import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import QueryReducer from './reducer/QuerySlice';

export const store = configureStore({
  reducer: {
    query: QueryReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
