import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: JSON.parse(localStorage.getItem('address')) || {
    latitude: 12.96432,
    longitude: 77.71378,
    city: 'Bengaluru',
  },
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;

      localStorage.setItem('address', JSON.stringify(state.address));
    },
  },
});

export const selectAddress = ({ address }) => address;

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
