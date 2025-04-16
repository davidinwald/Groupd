import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import HealthCheck from "./components/HealthCheck";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={8}>
        <Box p={8} mb={8}>
          <Heading as="h1" size="xl" mb={4}>
            Welcome to Groupd
          </Heading>
          <Text fontSize="lg">Your new application is ready to go!</Text>
        </Box>
        <HealthCheck />
      </Container>
    </ChakraProvider>
  );
}

export default App;
