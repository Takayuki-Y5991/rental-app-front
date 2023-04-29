export interface Customer {
  id?: number;
  password: string;
  name: string;
  gender: number;
  birthday: Date | string | undefined;
  registerDate: Date | string | undefined;
  updateDate?: Date | string;
}

export interface Customers {
  count: number;
  customers: Customer[];
}
