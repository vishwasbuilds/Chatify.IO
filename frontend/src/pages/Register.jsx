import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import apiURL from "../../utils";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  //Navigate
  const navigate = useNavigate();
  //main logic for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiURL}/api/users/register`, {
        email,
        password,
        username,
      });
      console.log(data.user);

      navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient={useColorModeValue(
        "linear(to-r, blue.600, purple.600)",
        "linear(to-br, blue.900, purple.900)",
      )}
    >
      <Box
        display="flex"
        w={["95%", "90%", "80%", "75%"]}
        maxW="1200px"
        h={["auto", "auto", "600px"]}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
      >
        {/* Left Panel - Hidden on mobile */}
        <Box
          display={["none", "none", "flex"]}
          w="50%"
          bgImage="url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.600"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={10}
            color="white"
          >
            <Text fontSize="4xl" fontWeight="bold" mb={4}>
              Join Our Chat Community
            </Text>
            <Text fontSize="lg" maxW="400px">
              Connect with friends and start chatting instantly
            </Text>
          </Box>
        </Box>

        {/* Right Panel - Registration Form */}
        <Box
          w={["100%", "100%", "50%"]}
          bg={useColorModeValue("white", "gray.800")}
          p={[6, 8, 10]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {/* Mobile Header - Shown only on mobile */}
          <Box display={["block", "block", "none"]} textAlign="center" mb={6}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Create Account
            </Text>
          </Box>

          <VStack spacing={5} w="100%" maxW="400px" mx="auto">
            <FormControl id="username" isRequired>
              <FormLabel
                color={useColorModeValue("gray.700", "gray.200")}
                fontWeight="medium"
              >
                Username
              </FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                size="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                _hover={{ borderColor: "indigo.500" }}
                _focus={{ borderColor: "indigo.500" }}
                placeholder="Choose a username"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel
                color={useColorModeValue("gray.700", "gray.200")}
                fontWeight="medium"
              >
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                size="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                _hover={{ borderColor: "indigo.500" }}
                _focus={{ borderColor: "indigo.500" }}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel
                color={useColorModeValue("gray.700", "gray.200")}
                fontWeight="medium"
              >
                Password
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                _hover={{ borderColor: "indigo.500" }}
                _focus={{ borderColor: "indigo.500" }}
                placeholder="Create a password"
              />
            </FormControl>

            <Button
              onClick={handleSubmit}
              isLoading={loading}
              colorScheme="purple"
              width="100%"
              transform="auto"
              _hover={{ scale: 1.05 }}
              transition="transform 0.2s"
              size="lg"
              fontSize="md"
              mt={4}
            >
              Create Account
            </Button>

            <Text color={useColorModeValue("gray.600", "gray.400")}>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "var(--chakra-colors-blue-500)",
                  fontWeight: "500",
                }}
              >
                Sign in
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
