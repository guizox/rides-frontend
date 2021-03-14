import React from 'react';
import {
  Stack
} from "@chakra-ui/react"
import { notificationsStore } from '../../zustand/notifications';
import AlertComponent from './AlertComponent';

const Alerts = () => {
  const { notifications } = notificationsStore();

  return (
    <Stack spacing={3} position="absolute" width="100vw">
      {
        notifications.map((item: any) =>
          <AlertComponent item={item} />
        )
      }
    </Stack>
  )
}

export default Alerts;