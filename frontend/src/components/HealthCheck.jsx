import React, { useState, useEffect } from "react";
import { Box, Text, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";

const HealthCheck = () => {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const checkHealth = async () => {
      try {
        // Use the environment variable for the API URL
        const apiUrl = import.meta.env.VITE_API_URL || "/api";
        console.log("Checking health at:", apiUrl);
        const response = await axios.get(`${apiUrl}/health`);
        setHealthStatus(response.data.status);
      } catch (error) {
        console.error("Health check failed:", error);
        toast({
          title: "Backend Connection Error",
          description: "Unable to connect to the backend service",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setHealthStatus("error");
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, [toast]);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Backend Status:
      </Text>
      {loading ? (
        <Spinner />
      ) : (
        <Text color={healthStatus === "healthy" ? "green.500" : "red.500"}>
          {healthStatus === "healthy" ? "✅ Healthy" : "❌ Unhealthy"}
        </Text>
      )}
    </Box>
  );
};

export default HealthCheck;
