import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { generateRememberList} from '../../utils'


export interface WordsState {
  wordList: [],
  rememberList: [],
  updateError: any
}

const initialState: WordsState = {
  wordList: [],
  rememberList: [],
  updateError: null
};
export const wordListAsync = createAsyncThunk(
  'word/fetchWordList',
  async () => {
    const response = await fetch('/word/queryByCondition/remember').then(response => response.json());
    return response;
  }
);

export const updateWordStatusAsync = createAsyncThunk(
  'word/updateStatus',
  async (data:any) => {
    const response = await fetch(`/word/${data.query}`, { method: "put", body: JSON.stringify(data.status), headers: {"content-type": "application/json"}})
    return response 
  }
)

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
      .addCase(updateWordStatusAsync.fulfilled, (state: any, action: any) => {
        state.updateError = action.payload;
        
      })
  }
})

export const selectRememberList = (state: RootState) => state.words.rememberList;
export const selectWordList = (state: RootState) => state.words.wordList;

export default wordsSlice.reducer;

