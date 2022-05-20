import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { generateRememberList} from '../../utils'


export interface WordsState {
  wordList: [],
  rememberList: []
}

const initialState: WordsState = {
  wordList: [],
  rememberList: []
};
export const wordListAsync = createAsyncThunk(
  'word/fetchWordList',
  async () => {
    const response = await fetch('/word/').then(response => response.json());
    return response;
  }
);


export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(wordListAsync.fulfilled, (state: any, action: any) => {
        state.wordList = action.payload;
        state.rememberList = generateRememberList(action.payload)
      })
  },
})

export const selectRememberList = (state: RootState) => state.words.rememberList;
export const selectWordList = (state: RootState) => state.words.wordList;

export default wordsSlice.reducer;

