/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Grid,
} from "@chakra-ui/react"
import React from 'react';
import { notificationsStore } from "../../zustand/notifications";
import actions from "../../zustand/notifications/actions";

export interface Notification {
  status: "info" | "warning" | "success" | "error" | undefined,
  message: string,
  id: number
}

interface Props {
  item: Notification
}

const AlertComponent = ({ item }: Props) => {

  const { dispatch } = notificationsStore();
  const { notificationsHide } = actions(dispatch);

  React.useEffect(() => {
    setTimeout(() => {
      notificationsHide(item.id);
    }, 2000);
  }, [notificationsHide])

  return (
    <Alert status={item.status}>
      <Grid display="flex" justifyContent="space-between" width="100%">
        <Grid>
          {item.message}
        </Grid>

        <Grid justifySelf="flex-end" cursor="pointer" onClick={() => notificationsHide(item.id)}>
          X
        </Grid>
      </Grid>
    </Alert>
  )
}

export default AlertComponent;