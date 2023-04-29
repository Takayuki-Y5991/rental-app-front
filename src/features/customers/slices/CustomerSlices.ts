import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Customer } from '../types/Customer';

const initialState: Customer = {
  id: 0,
  password: '',
  name: '',
  gender: 1,
  birthday: undefined,
  registerDate: undefined,
  updateDate: undefined,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Customer>) => {
      state = { ...state, ...action.payload };
    },
    update: (state, action: PayloadAction<Customer>) => {
      state = { ...state, ...action.payload };
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { create, update, reset } = customerSlice.actions;

export const selectCustomer = (state: RootState) => state.customer;

export default customerSlice.reducer;
