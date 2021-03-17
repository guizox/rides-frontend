import React from 'react';
import {
  Tr,
  Th,
} from "@chakra-ui/react"
import { ridesStore } from '../../../../zustand/rides';
import moment from 'moment';
import { formatCurrency } from '../../../../utils';
import { columns } from './columns';
import ApplicationTable from '../../../../components/ApplicationTable';

const RidesTable = () => {

  const { data } = ridesStore();

  const sum = data.reduce((acc: number, cur: any) => acc + parseFloat(cur.amount), 0)

  return (

    <React.Fragment>
      <ApplicationTable
        tableStructure={columns}
        data={data.map((item: any) => ({
          ...item,
          createdAt: moment(item.createdAt).format('DD/MM/YYYY'),
          amount: formatCurrency(item.amount)
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