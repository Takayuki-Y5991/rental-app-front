import { UseMutationResult } from '@tanstack/react-query';
import { Book } from './Book';
import { AxiosResponse } from 'axios';

export interface BookFormProps {
  book: Book;
  action: UseMutationResult<AxiosResponse<Book, any>, unknown, Book, unknown>;
  notification: () => void;
  status?: boolean;
  setStatus?: (args: boolean) => void;
}
