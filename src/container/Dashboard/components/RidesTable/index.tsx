import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import { ridesStore } from '../../../../zustand/rides';
import moment from 'moment';
import { formatCurrency } from '../../../../utils';

const RidesTable = () => {

  const { data } = ridesStore();


  return (
    <Table variant="simple" w={'100vw'}>
      <Thead>
        <Tr>
          <Th>Descrição</Th>
          <Th>Categoria</Th>
          <Th >Data</Th>
          <Th isNumeric>Valor</Th>
        </Tr>
      </Thead>
      <Tbody>

        {
          data.map((item: any) =>

            <Tr>
              <Td>{item.description}</Td>
              <Td>{item.category}</Td>
              <Td>{moment(item.createdAt).format('DD/MM/YYYY')}</Td>
              <Td isNumeric>{formatCurrency(item.amount)}</Td>
            </Tr>
          )
        }



      </Tbody>
      <Tfoot>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th isNumeric>{formatCurrency(data.reduce((acc: number, cur: any) => acc + cur.amount, 0))}</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}

export default RidesTable;