import { Customer } from './../types/Customer';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useCustomersQuery = () => {
  const fetchCustomers = async () => {
    const { data } = await axios.get<Customer[]>(
      `${process.env.API_URL}/customers`
    );
    return data;
  };
  return useQuery<Customer[], Error>({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
    staleTime: 0,
  });
};

export const useCustomerQuery = (customerId: number) => {
  const fetchCustomers = async () => {
    const { data } = await axios.get<Customer[]>(
      `${process.env.API_URL}/customers/${customerId}`
    );
    return data;
  };
  return useQuery<Customer[], Error>({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
    staleTime: 0,
  });
};
