import React from 'react';
import Application from './';
import { render } from '@testing-library/react';
import ApplicationTable from './';
import { Th, Tr } from '@chakra-ui/table';

describe('Applcation Table tests', () => {
  it('Render <ApplicationTable/> with valid values', () => {
    render(
      <ApplicationTable
        data={[
          { a: 'a', b: 'b' }
        ]}

        tableStructure={[
          {
            accessor: 'a',
            label: 'A',
          },
          {
            accessor: 'b',
            label: 'B',
          }
        ]}
      ></ApplicationTable>
    )
  })

  it('Render <ApplicationTable/> and validate if the values are in the right place', () => {

    const data = [
      { a: 'a', b: 'b' },
      { a: 'd', b: 'c' },
      { a: 'e', b: 'f' }
    ]

    const { getByTestId } = render(
      <ApplicationTable
        data={data}
        tableStructure={[
          {
            accessor: 'a',
            label: 'A',
          },
          {
            accessor: 'b',
            label: 'B',
          }
        ]}
      ></ApplicationTable>
    )

    const aIndex = 1;
    const valueAByIndex = data[aIndex].a

    const bIndex = 2;
    const valueBByIndex = data[bIndex].b

    expect(getByTestId(`column-a-line-${aIndex}`).textContent).toBe(valueAByIndex);
    expect(getByTestId(`column-b-line-${bIndex}`).textContent).toBe(valueBByIndex);
  })

  it('Render <ApplicationTable/> validate if it has footer', () => {

    const data = [
      { a: 'a', b: 'b' },
      { a: 'd', b: 'c' },
      { a: 'e', b: 'f' }
    ]

    const { getByTestId } = render(
      <ApplicationTable
        data={data}
        tableStructure={[
          {
            accessor: 'a',
            label: 'A',
          },
          {
            accessor: 'b',
            label: 'B',
          }
        ]}
        footer={<Tr>
          <Th></Th>
        </Tr>}
      ></ApplicationTable>
    )

    expect(getByTestId(`application-table-footer`)).toBeInTheDocument()
  })

  it('Render <ApplicationTable/> validate if it has no footer', () => {

    const data = [
      { a: 'a', b: 'b' },
      { a: 'd', b: 'c' },
      { a: 'e', b: 'f' }
    ]

    const { queryByTestId } = render(
      <ApplicationTable
        data={data}
        tableStructure={[
          {
            accessor: 'a',
            label: 'A',
          },
          {
            accessor: 'b',
            label: 'B',
          }
        ]}
      ></ApplicationTable>
    )

    expect(queryByTestId(`application-table-footer`)).toBeNull()
  })
})