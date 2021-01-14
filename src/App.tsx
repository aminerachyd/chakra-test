import * as React from "react";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import theme from "./extendTheme";

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Box backgroundColor="blue.900" h="100vh">
      <Navbar />
      <Hero />
    </Box>
  </ChakraProvider>
);
