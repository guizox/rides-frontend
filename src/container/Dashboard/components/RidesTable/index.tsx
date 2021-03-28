import React from 'react';
import {
  Tr,
  Th,
  Grid,
  Button,
} from "@chakra-ui/react"
import { ridesStore } from '../../../../zustand/rides';
import moment from 'moment';
import { formatCurrency } from '../../../../utils';
import { columns } from './columns';
import ApplicationTable from '../../../../components/ApplicationTable';
import actions from '../../../../zustand/rides/actions';

const RidesTable = () => {

  const { data, dispatch } = ridesStore();

  const { duplicateAction, handleExcludeDialog } = actions(dispatch);

  const sum = data.reduce((acc: number, cur: any) => acc + parseFloat(cur.amount), 0)


  return (

    <React.Fragment>
      <ApplicationTable
        tableStructure={columns}
        data={data.map((item: any) => ({
          ...item,
          createdAt: moment(item.createdAt).format('DD/MM/YYYY'),
          amount: formatCurrency(item.amount),
          actions: 
          <Grid display="flex" justifyContent="flex-start">
            <Button background="blue.300" color="white" onClick={() => duplicateAction(item.id)}>
              Duplicar
            </Button>
            <Button marginLeft="20px" background="red.200" color="white" onClick={() => handleExcludeDialog(item)}>
              Excluir
            </Button>
          </Grid>
        }))}
        footer={
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th isNumeric>{formatCurrency(sum)}</Th>
          </Tr>
        } />
    </React.Fragment>
  )
}

export default RidesTable;