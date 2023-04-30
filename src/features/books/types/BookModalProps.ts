import { Book } from './Book';

export interface BookDeleteModalProps {
  id: number;
  status: boolean;
  setModalState: (args: boolean) => void;
}

export interface BookEditModalProps {
  status: boolean;
  setModalState: (args: boolean) => void;
  book: Book;
}
