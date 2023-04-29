import { useAppDispatch } from '../../../app/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Customer } from '../types/Customer';
import axios from 'axios';
import { reset } from '../slices/CustomerSlices';

export const useCustomerMutation = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const createCustomerMutation = useMutation(
    (customer: Customer) =>
      axios.post<Customer>(`${process.env.REACT_APP_REST_URL}/customers`, customer),
    {
      onSuccess: (res) => {
        const previousCustomers = queryClient.getQueryData<Customer[]>(['customers']);
        if (previousCustomers) {
          queryClient.setQueryData<Customer[]>(['customers'], [...previousCustomers, res.data]);
        }
        dispatch(reset);
      },
    }
  );
  const updateCustomerMutation = useMutation(
    (customer: Customer) =>
      axios.put<Customer>(`${process.env.REACT_APP_REST_URL}/customers/${customer.id}`, customer),
    {
      onSuccess: (res, variables) => {
        const previousCustomers = queryClient.getQueryData<Customer[]>(['customers']);
        if (previousCustomers) {
          queryClient.setQueryData<Customer[]>(
            ['customers'],
            previousCustomers.map((customer) =>
              customer.id === variables.id ? res.data : customer
            )
          );
        }
      },
    }
  );
  const deleteCustomerMutation = useMutation(
    (id: number) => axios.delete(`${process.env.REACT_APP_REST_URL}/customers/${id}`),
    {
      onSuccess(res, variables) {
        const previous = queryClient.getQueryData<Customer[]>(['customers']);
        if (previous) {
          queryClient.setQueryData<Customer[]>(
            ['customers'],
            previous.filter((customer) => customer.id !== variables)
          );
        }
        dispatch(reset);
      },
    }
  );
  return {
    createCustomerMutation,
    deleteCustomerMutation,
    updateCustomerMutation,
  };
};
