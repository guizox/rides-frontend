import React from 'react';
import { Avatar, Grid, VStack, WrapItem } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Filter from './components/Filter';
import RidesTable from './components/RidesTable';
import { Divider } from "@chakra-ui/react"
import { ridesStore } from '../../zustand/rides';
import actions from '../../zustand/rides/actions';
import AddDialog from './components/AddDialog';

const Dashboard = () => {

  const [open, setOpen] = React.useState(false);
  const { dispatch } = ridesStore()
  const { getAll } = actions(dispatch);

  React.useEffect(() => {
    getAll();
  }, [])

  return (

    <Grid w="100%" h="80vh" >
      <AddDialog open={open} onClose={() => setOpen(!open)} />
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
        onClick={() => setOpen(!open)}
      >
        <WrapItem cursor="pointer">
          <Avatar cursor="pointer" background="#48cae4" icon={<AddIcon color="white" cursor="pointer" />} />
        </WrapItem>
      </Grid>
    </Grid>
  )
}

export default Dashboard;