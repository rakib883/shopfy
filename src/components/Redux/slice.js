import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     cartData : [],
     favoriteCart :[],
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {

     // product cart area start
     addTocart:(state,action)=>{
          const existingProduct = state.cartData.find((item)=>item?.id === action.payload.id)
          if(existingProduct){
               existingProduct.quantety++
          }else{
             state.cartData.push(action.payload)
          }
          
     },
     decrementQuantity:(state,action)=>{
          const existingProduct = state.cartData.find((item)=>item?.id === action.payload.id)
          if(existingProduct.quantety === 1){
               existingProduct.quantety === 1
          }else{
               existingProduct.quantety--
          }
          
     },
     removeCartData:(state,action)=>{
          state.cartData = state.cartData.filter((item)=>item?.id !== action.payload.id)
     },
     // product cart area end
     addFavorite:(state,action)=>{
        state.favoriteCart.push(action.payload)
     }
  },
});

export const {addTocart,removeCartData,decrementQuantity,addFavorite  } = dataSlice.actions;
export default dataSlice.reducer;
