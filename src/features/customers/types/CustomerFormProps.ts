import { AxiosResponse } from 'axios';
import { Customer } from './Customer';
import { UseMutationResult } from '@tanstack/react-query';

export interface CustomerFormProps {
  customer: Customer;
  action: UseMutationResult<
    AxiosResponse<Customer, any>,
    unknown,
    Omit<Customer, 'id' | 'registerDate' | 'updateDate'>,
    unknown
  >;
  notification: () => void;
}
