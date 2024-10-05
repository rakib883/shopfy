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

          if(action.payload.id){
               state.favoriteCart = state.favoriteCart.filter((item)=>item?.id !== action.payload.id) 
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
          const existingFavorite = state.cartData.find((item)=>item.id === action.payload.id)
          if(!existingFavorite){
               state.favoriteCart.push(action.payload)
          }
         
     },
    
     favoriteDecrement:(state,action)=>{
          const checkExistingFavorite = state.favoriteCart.find((existingData)=>existingData.id === action.payload.id)
          if(checkExistingFavorite.quantety === 1){
               checkExistingFavorite.quantety === 1
          }else{
               checkExistingFavorite.quantety-- 
          }          
          
     },
     removeFavoriteData:(state,action)=>{
          state.favoriteCart = state.favoriteCart.filter((item)=>item.id !== action.payload.id)
     }
  },
});

export const {addTocart,removeCartData,decrementQuantity,addFavorite,favoriteDecrement,removeFavoriteData,favoriteExistingDataRemove } = dataSlice.actions;
export default dataSlice.reducer;
