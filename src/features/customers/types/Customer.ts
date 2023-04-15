export interface Customer {
  id?: number;
  password?: string;
  name: string;
  sex: number;
  birthday: Date | undefined;
  registerDate: Date | undefined;
  updateDate?: Date;
}

export interface UpdateCustomer {
  password?: string;
  name: string;
  sex: number;
  birthday: Date;
  registerDate: Date;
  updateDate?: Date;
}

export interface CreateCustomer {
  password?: string;
  name: string;
  sex: number;
  birthday: Date;
}
