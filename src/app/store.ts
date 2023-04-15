import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import customerReducer from '../features/customers/slices/CustomerSlices';

export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
