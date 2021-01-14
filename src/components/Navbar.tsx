import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC<any> = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p={8} bg="teal.400">
      <Box>
        <Heading as="h2" size="md" color="white" isTruncated>
          A logo would fit better here
        </Heading>
      </Box>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Link color="white" mr={2}>
          A first link
        </Link>
        <Link color="white" mr={2}>
          A second link
        </Link>
        <Link color="white" isExternal>
          A third link
        </Link>
      </Stack>
    </Flex>
  );
};

export default Navbar;
