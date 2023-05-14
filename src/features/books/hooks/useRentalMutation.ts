import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Rental } from '../types/Rental';

export const useRentalMutation = () => {
  const createRentalMutation = useMutation((rental: Rental) =>
    axios.post<number>(`${process.env.REACT_APP_REST_URL}/rentals`, rental)
  );

  const updateRentalMutation = useMutation((rentalId: number[]) =>
    axios.put(`${process.env.REACT_APP_REST_URL}/rentals`, rentalId)
  );

  return {
    createRentalMutation,
    updateRentalMutation,
  };
};
