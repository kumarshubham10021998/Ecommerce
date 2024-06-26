import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      dispatch(fetchProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
      // You can dispatch an action for error handling if needed
    }
  };
}
