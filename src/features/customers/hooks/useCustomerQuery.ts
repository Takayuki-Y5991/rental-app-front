import { Customer, Customers } from './../types/Customer';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QueryParams } from '../types/QueryParams';

export const useCustomersQuery = (params: QueryParams = {}) => {
  const fetchCustomers = async () => {
    const { data } = await axios.get<Customers>(`${process.env.REACT_APP_REST_URL}/customers`, {
      params,
    });
    return data;
  };
  // FIXME: 毎回データを取得する構造を変更したい
  return useQuery<Customers, Error>({
    queryKey: ['customers', params],
    queryFn: () => fetchCustomers(),
    cacheTime: 0,
  });
};

export const useCustomerQuery = (customerId: number) => {
  const fetchCustomer = async (customerId: number) => {
    const { data } = await axios.get<Customer>(
      `${process.env.REACT_APP_REST_URL}/customers/${customerId}`
    );
    return data;
  };
  return useQuery<Customer, Error>({
    queryKey: ['customer'],
    queryFn: () => fetchCustomer(customerId),
    cacheTime: 0,
  });
};
