import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import QueryReducer from './reducer/QuerySlice';
import WordsSlice from './reducer/WordsSlice';
import CheckRememberSlice from './reducer/CheckRememberSlice';

export const store = configureStore({
  reducer: {
    query: QueryReducer,
    words: WordsSlice,
    checkRemember: CheckRememberSlice
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
