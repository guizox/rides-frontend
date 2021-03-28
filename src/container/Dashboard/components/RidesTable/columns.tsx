
import { TableStructure } from '../../../../components/ApplicationTable/interfaces';

export const columns: TableStructure[] = [
  {
    accessor: 'description',
    label: 'Descrição',
  },
  {
    accessor: 'category',
    label: 'Categoria',
  },
  {
    accessor: 'createdAt',
    label: 'Data',
  },
  {
    accessor: 'amount',
    label: 'Valor',
  },
  {
    accessor: 'actions',
    label: 'Ações',
  }
]