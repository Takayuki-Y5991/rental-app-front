export interface Customer {
  id?: number;
  password: string;
  name: string;
  sex: number;
  birthday: Date | string | undefined;
  registerDate: Date | string | undefined;
  updateDate?: Date | string;
}
