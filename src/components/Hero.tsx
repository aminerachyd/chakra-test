import { CheckIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Container
      mt={10}
      // centerContent
      borderRadius="2xl"
      maxW="4xl"
      borderColor="white"
      border="2px"
      w={{ base: "xs", xs: "xs", sm: "sm", lg: "lg" }}
      backgroundColor="teal.100"
    >
      <Container centerContent>
        <Heading as="h2" size="lg" color="black" isTruncated mt={3}>
          A logo would fit better here
        </Heading>
        <Text>A small login form</Text>
      </Container>
      <Divider my={3} />
      <Box mb={6}>
        <FormControl>
          <FormLabel mb={3}>Put your username here :</FormLabel>
          <InputGroup>
            <Input placeholder="Enter username" bg="white" />
            <InputRightElement children={<CheckIcon color="red.500" />} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel my={3}>Put your password here :</FormLabel>
          <InputGroup>
            <Input type="password" placeholder="Enter password" bg="white" />
            <InputRightElement children={<UnlockIcon color="blue.500" />} />
          </InputGroup>
        </FormControl>
        <Button w="100%" color="white" bg="blue.700" mt={5}>
          Log in
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
