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
import { Props } from './interfaces';

const ApplicationTable = <T extends { [props: string]: any }>({ tableStructure, data, footer }: Props<T>) => {
  return (
    <Table variant="simple" w={'100vw'}>
      <Thead>
        <Tr>
          {
            tableStructure.map(item => <Th isNumeric={item.isNumeric}>{item.label}</Th>)
          }
        </Tr>
      </Thead>
      <Tbody>
        {
          data?.map(item =>
            <Tr>
              {
                tableStructure.map(column => <Td isNumeric={column.isNumeric}>{item[column.accessor]}</Td>)
              }
            </Tr>
          )
        }
      </Tbody>
      <Tfoot>
        {footer}
      </Tfoot>
    </Table>
  )
}

export default ApplicationTable;