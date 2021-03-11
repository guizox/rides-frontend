import React from 'react';
import { Grid, Box, Container, Input, Stack, Button, CircularProgress } from '@chakra-ui/react';
import { authStore } from '../../zustand/auth-store';
import actions from '../../zustand/auth-store/actions';

const Login = ({ history }: any) => {

  const { fields: { email, password }, isLoading, data } = authStore();
  const dispatch = authStore(state => state.dispatch);
  const { changeFields, login } = actions(dispatch);

  React.useEffect(() => {
    if (data?.accessToken) {
      history.push('/dashboard');
    }
  }, [data?.accessToken, history])

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
              <Input value={email} onChange={e => changeFields({ key: 'email', value: e.target.value })} variant="outline" placeholder="email" type={'email'} />
              <Input value={password} onChange={e => changeFields({ key: 'password', value: e.target.value })} variant="outline" placeholder="password" type={'password'} />

              <Button variant="solid" color="#fff" background="#48cae4" onClick={login}>
                {isLoading ? <CircularProgress size={'20px'} isIndeterminate /> : 'Login'}
              </Button>
            </Stack>

          </Grid>
        </Container>
      </Grid>
    </Box>
  )
}

export default Login;