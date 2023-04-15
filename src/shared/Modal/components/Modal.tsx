import { Modal } from '@mantine/core';
import { ModalProps } from '../types/ModalProps';
import React from 'react';

export const WrapModal = ({ header, content, footer, status, setModalState }: ModalProps) => {
  return (
    <Modal opened={status} onClose={() => setModalState(!status)} title={header}>
      {content}
      {footer}
    </Modal>
  );
};
