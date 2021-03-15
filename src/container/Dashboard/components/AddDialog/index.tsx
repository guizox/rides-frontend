import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import AddForm from './AddForm';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddDialog = ({ open, onClose }: Props) => {

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicione uma nova corrida</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={10}>
          <AddForm />
        </ModalBody>
      </ModalContent>
    </Modal>

  )
}

export default AddDialog;