import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface QueryState {
    value: object;
  }
  const initialState: QueryState = {
    value: {},
  };
export const incrementAsync = createAsyncThunk(
  'query/fetchQuery',
  async (query:string) => {
    const response = await fetch('/query/'+query).then(response => response.json());
    return response.data;
  }
);

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        increment: (state) => {
          state.value = {data: "test"};
        },
      },
    extraReducers: (builder:any) => {
        builder
          .addCase(incrementAsync.fulfilled, (state:any, action:any) => {
            // state.status = 'idle';
            console.log(action.payload)
            state.value = action.payload;
          })
      },
})

export const selectQuery = (state: RootState) => state.query.value;

export default querySlice.reducer;

