import axios from 'axios';
import { Book, Books } from '../types/Book';
import { QueryParams } from '../types/QueryParams';
import { useQuery } from '@tanstack/react-query';

export const useBooksQuery = (params: QueryParams = {}) => {
  const fetchBooks = async () => {
    const { data } = await axios.get<Books>(`${process.env.REACT_APP_REST_URL}/books`, {
      params,
    });
    return data;
  };
  return useQuery<Books, Error>({
    queryKey: ['books', params],
    queryFn: () => fetchBooks(),
    cacheTime: 0,
  });
};

export const useBookQuery = (bookId: number) => {
  const fetchBook = async (bookId: number) => {
    const { data } = await axios.get<Book>(`${process.env.REACT_APP_REST_URL}/books/${bookId}`);
    return data;
  };
  return useQuery<Book, Error>({
    queryKey: ['book'],
    queryFn: () => fetchBook(bookId),
    cacheTime: 0,
  });
};
