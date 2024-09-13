import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     cartData : [],
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
     addTocart:(state,action)=>{
          state.cartData.push(action.payload)
     }
  },
});

export const {addTocart  } = dataSlice.actions;
export default dataSlice.reducer;
