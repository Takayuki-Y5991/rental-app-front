import { Modal } from '@mantine/core';
import { ModalProps } from '../types/ModalProps';
import React from 'react';
import { CustomTitle } from '../../Text/components/CustomTitle';

export const WrapModal = ({ header, content, footer, status, setModalState }: ModalProps) => {
  return (
    <Modal
      opened={status}
      onClose={() => setModalState(!status)}
      title={<CustomTitle title={header} />}
    >
      {content}
      {footer}
    </Modal>
  );
};
