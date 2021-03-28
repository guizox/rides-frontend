import React from 'react';
import { Avatar, Grid, VStack, WrapItem } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Filter from './components/Filter';
import RidesTable from './components/RidesTable';
import { Divider } from "@chakra-ui/react"
import { ridesStore } from '../../zustand/rides';
import actions from '../../zustand/rides/actions';
import AddDialog from './components/AddDialog';
import ConfirmationDialog from './components/ConfirmationDialog';

const Dashboard = () => {

  const { dispatch, openDialog } = ridesStore()
  const { getAll, getAllCategories, handleDialog } = actions(dispatch);

  React.useEffect(() => {
    getAll();
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <Grid w="100%" h="91vh" >
      <AddDialog />
      <ConfirmationDialog />
      <VStack spacing={7}>
        <Grid >
          <Filter />
        </Grid>

        <Divider />

        <Grid>
          <RidesTable />
        </Grid>
      </VStack>

      <Grid
        alignContent="center"
        justifyItems="center"
        justifySelf="flex-end"
        position="absolute"
        bottom={0}
        right="0"
        padding={20}
        onClick={() => handleDialog(!openDialog)}
      >
        <WrapItem cursor="pointer">
          <Avatar cursor="pointer" background="#48cae4" icon={<AddIcon color="white" cursor="pointer" />} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} />
        </WrapItem>
      </Grid>
    </Grid>
  )
}

export default Dashboard;