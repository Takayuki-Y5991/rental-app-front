import { Customer } from './Customer';

export interface CustomerModalProps {
  id: number;
  status: boolean;
  setModalState: (args: boolean) => void;
}

export interface CustomerEditModalProps {
  status: boolean;
  setModalState: (args: boolean) => void;
  customer: Customer;
}
