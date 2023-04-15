import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../../app/store';
import { CreateCustomer, Customer, UpdateCustomer } from '../types/Customer';

export interface CustomerState extends Customer {}

const initialState: CustomerState = {
  id: 0,
  password: '',
  name: '',
  sex: 1,
  birthday: undefined,
  registerDate: undefined,
  updateDate: undefined,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<CreateCustomer>) => {
      state = { ...state, ...action.payload };
    },
    update: (state, action: PayloadAction<UpdateCustomer>) => {
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
