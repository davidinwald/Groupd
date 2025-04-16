import React from "react";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Groupd
        </Heading>
        <Text fontSize="lg">Your new application is ready to go!</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
