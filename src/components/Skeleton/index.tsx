import React from 'react';
import { Avatar, Box, Grid, Menu, MenuButton, MenuItem, MenuList, WrapItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { AddIcon } from '@chakra-ui/icons';
import { authStore } from '../../zustand/auth-store';
import actions from '../../zustand/auth-store/actions';

interface Props {
  children: React.ReactNode;
}

const Skeleton = ({ children }: Props) => {

  const { dispatch, data } = authStore();
  const { logout } = actions(dispatch);
  console.log(data.accessToken);

  return (
    <Grid >

      {/** NAVBAR */}
      <Grid
        d="flex"
        w="100%"
        justifyContent="space-between"
        h="70px"
        p={3}
        borderBottom="1px solid #f0f0f0"
        background="#48cae4"
        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      >
        <Grid justifySelf="flex-start" alignContent="center" justifyItems="center">
          <a href="/dashboard">
            <img src="logo-branco.png" alt="logo-branco" width="80px" />
          </a>
        </Grid>

        <Grid justifySelf="flex-end">
          <Box fontSize="xl">
            <Grid d="flex" alignContent="center" justifyItems="center" gap={3}>
              <Grid alignContent="center" justifyItems="center">

                <ColorModeSwitcher justifySelf="flex-end" />
              </Grid>
              <Menu>
                <MenuButton
                  as={Avatar}
                  aria-label="Options"
                  icon={
                    <WrapItem>
                      <Avatar
                        size="md"
                        name={'Avatar'}
                      />{" "}
                    </WrapItem>}
                />
                <MenuList>
                  <MenuItem icon={<AddIcon />} command="⌘T" onClick={logout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>


            </Grid>

          </Box>
        </Grid>
      </Grid>
      {/** NAVBAR */}

      <Grid d="flex" mt="20px">
        {children}
      </Grid>
    </Grid>
  )
}

export default Skeleton;