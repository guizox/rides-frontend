import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Router from './router';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="1vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>

    <Router />
  </ChakraProvider>
)
