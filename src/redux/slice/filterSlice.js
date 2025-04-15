import { createSlice } from '@reduxjs/toolkit'


const  initialState = {
    categoryValue: '',
    brandValue: ''
  }

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterCategory:(state, action)=>{
          state.categoryValue = action.payload
       },

       filterBrand:()=>{
        console.log('filterBrand called');
       }
    }

})

export const { filterCategory, filterBrand } = filterSlice.actions

export default filterSlice.reducer