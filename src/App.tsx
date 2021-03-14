import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router from './router';
import Alerts from "./container/Alerts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Alerts />
    <Router />
  </ChakraProvider>
)
