import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import QueryReducer from './reducer/QuerySlice';
import WordsSlice from './reducer/WordsSlice';

export const store = configureStore({
  reducer: {
    query: QueryReducer,
    words: WordsSlice
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
