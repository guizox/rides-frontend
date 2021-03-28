import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
  Grid,
  CircularProgress
} from "@chakra-ui/react";
import { ridesStore } from '../../../../zustand/rides';
import actions from '../../../../zustand/rides/actions';

const ConfirmationDialog = () => {

  const { excludeId, dispatch, isExcluding } = ridesStore();
  const { handleExcludeDialog, removeAction, getAll } = actions(dispatch);

  return (
    <Modal isOpen={!!excludeId} onClose={() => handleExcludeDialog(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tem certeza que deseja excluir?</ModalHeader>
        <ModalCloseButton />
        <Grid display="flex" justifyContent="space-between" padding={3}>
          <Button background="red.300" color="white">
              Nao
          </Button>
          <Button background="blue.300" color="white" onClick={() => removeAction(getAll)}>
            { isExcluding ? <CircularProgress size={15} /> : 'Sim'  }
          </Button>
        </Grid>
      </ModalContent>
    </Modal>

  )
}

export default ConfirmationDialog;