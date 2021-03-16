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
import { ridesStore } from '../../../../zustand/rides';
import actions from '../../../../zustand/rides/actions';

const AddDialog = () => {

  const { openDialog, dispatch } = ridesStore();
  const { handleDialog } = actions(dispatch);

  return (
    <Modal isOpen={openDialog} onClose={() => handleDialog(false)}>
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