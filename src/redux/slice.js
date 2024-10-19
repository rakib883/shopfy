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
               existingProduct.quantity++
          }else{
             state.cartData.push(action.payload)
          }

          if(action.payload.id){
               state.favoriteCart = state.favoriteCart.filter((item)=>item?.id !== action.payload.id) 
          }
          
     },
     decrementQuantity:(state,action)=>{
          const existingProduct = state.cartData.find((item)=>item?.id === action.payload.id)
          if(existingProduct.quantity === 1){
               existingProduct.quantity === 1
          }else{
               existingProduct.quantity--
          }
          
     },
     removeCartData:(state,action)=>{
          state.cartData = state.cartData.filter((item)=>item?.id !== action.payload.id)
     },

     resetCart:(state,action)=>{
           state.cartData =[]
     },
     // product cart area end
     addFavorite:(state,action)=>{
          const existingFavorite = state.cartData.find((item)=>item.id === action.payload.id)
          if(!existingFavorite){
               state.favoriteCart.push(action.payload)
          }
         
     },

     favoriteIncrement:(state,action)=>{
        const existingFavorite = state.favoriteCart.find((item)=>item.id === action.payload.id)
        if(existingFavorite){
          existingFavorite.quantity++
        }
     },
    
     favoriteDecrement:(state,action)=>{
          const checkExistingFavorite = state.favoriteCart.find((existingData)=>existingData.id === action.payload.id)
          if(checkExistingFavorite.quantity === 1){
               checkExistingFavorite.quantity === 1
          }else{
               checkExistingFavorite.quantity-- 
          }          
          
     },
     removeFavoriteData:(state,action)=>{
          state.favoriteCart = state.favoriteCart.filter((item)=>item.id !== action.payload.id)
     }
  },
});

export const {addTocart,removeCartData,decrementQuantity,addFavorite,favoriteDecrement,removeFavoriteData,favoriteExistingDataRemove,favoriteIncrement,resetCart } = dataSlice.actions;
export default dataSlice.reducer;
