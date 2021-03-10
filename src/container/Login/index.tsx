import React from 'react';
import { Grid, Box, Container, Input, Stack, Button } from '@chakra-ui/react';

const Login = () => {

  const [state, setState] = React.useState({
    email: '',
    password: '',
  })

  return (
    <Box>
      <Grid minH={'90vh'} justifyItems="center" alignContent="center" justifyContent="center">
        <Container
          border={'solid 1px #f0f0f0'}
          boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
          padding={20}
          borderRadius={'5%'}
          minH={500}
          minW={350}
        >
          <Grid minW={'100%'} minH={'100%'} justifyItems="center" alignContent="center" justifyContent="center">

            <Grid width="100%" justifyItems="center" alignContent="center" justifyContent="center" marginBottom={50} >
              <img src="/logo.png" alt="logo" width={200} />
            </Grid>

            <Stack spacing={3}>
              <Input value={state.email} onChange={e => setState({ ...state, email: e.target.value })} variant="outline" placeholder="email" type={'email'} />
              <Input value={state.password} onChange={e => setState({ ...state, password: e.target.value })} variant="outline" placeholder="password" type={'password'} />

              <Button variant="solid" color="#fff" background="#48cae4" onClick={() => {
                alert(JSON.stringify(state))
              }}>
                Login
              </Button>
            </Stack>

          </Grid>
        </Container>
      </Grid>
    </Box>
  )
}

export default Login;