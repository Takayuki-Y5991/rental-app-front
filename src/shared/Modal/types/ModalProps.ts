export interface ModalProps {
  header: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  status: boolean;
  setModalState: (args: boolean) => void;
}
