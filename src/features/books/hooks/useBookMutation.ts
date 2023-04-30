import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Book } from '../types/Book';
import axios from 'axios';

export const useBookMutation = () => {
  const queryClient = useQueryClient();

  const createBookMutation = useMutation((book: Book) =>
    axios.post<Book>(`${process.env.REACT_APP_REST_URL}/books`, book)
  );

  const updateBookMutation = useMutation(
    (book: Book) => axios.put<Book>(`${process.env.REACT_APP_REST_URL}/books/${book.id}`, book),
    {
      onSuccess: (_, variables) => {
        queryClient.setQueryData<Book>(['book'], variables);
      },
    }
  );
  const deleteBookMutation = useMutation((bookId: number) =>
    axios.delete(`${process.env.REACT_APP_REST_URL}/books/${bookId}`)
  );
  return {
    createBookMutation,
    updateBookMutation,
    deleteBookMutation,
  };
};
