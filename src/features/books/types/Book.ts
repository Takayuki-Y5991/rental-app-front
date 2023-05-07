export interface Book {
  id?: number;
  bookName: string;
  author: string;
  publisher: string;
  status: number;
  arrivalDate: Date | string | undefined;
  updateDate?: Date | string | undefined;
}

export interface Books {
  count: number;
  books: Book[];
}

export enum BookStatus {
  IN_STOCK = 0,
  ON_RENT,
  DELETED,
}
