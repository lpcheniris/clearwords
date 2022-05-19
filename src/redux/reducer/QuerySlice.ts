import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface QueryState {
  value: object;
}
const initialState: QueryState = {
  value: {}
};
export const queryAsync = createAsyncThunk(
  'query/fetchQuery',
  async (query: string) => {
    const response = await fetch('/query/' + query).then(response => response.json());
    return response.data;
  }
);

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = { data: "test" };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(queryAsync.fulfilled, (state: any, action: any) => {
        state.value = action.payload;
      })
  },
})

export const selectQuery = (state: RootState) => state.query.value;

export default querySlice.reducer;

