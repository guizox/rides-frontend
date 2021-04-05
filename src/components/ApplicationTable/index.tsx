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

const ApplicationTable = <T extends Record<string, any>>({ tableStructure, data, footer }: Props<T>) => {
  return (
    <Table variant="simple" w={'100vw'} data-testid="application-table">
      <Thead>
        <Tr>
          {
            tableStructure.map(item => <Th key={`header-${item.label}`} data-testid={`header-${item.label}`} isNumeric={item.isNumeric}>{item.label}</Th>)
          }
        </Tr>
      </Thead>
      <Tbody>
        {
          data?.map((item, index) =>
            <Tr key={`line-${index}`} data-testid={`line-${index}`} >
              {
                tableStructure.map(column => 
                  <Td 
                    maxHeight={'60px'}  
                    key={`column-${column.accessor}-line-${index}`} 
                    data-testid={`column-${column.accessor}-line-${index}`} 
                    isNumeric={column.isNumeric}
                    padding="3px 30px"
                  >
                    {item[column.accessor]}
                  </Td>
                )
              }
            </Tr>
          )
        }
      </Tbody>
      {footer &&
        <Tfoot data-testid="application-table-footer">
          {footer}
        </Tfoot>
      }
    </Table>
  )
}

export default ApplicationTable;