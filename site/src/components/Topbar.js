import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Heading,
} from "@chakra-ui/core";
import { FiMenu } from 'react-icons/fi';

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      px={6}
      py={3}
      d="flex"
      justifyContent="space-between"
    >
      <IconButton
        variantColor="blue"
        aria-label="Menu"
        icon={FiMenu}
        fontSize="22px"
        onClick={toggleMenu}
      />

      <Drawer placement="left" onClose={toggleMenu} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <h5>SearchApp</h5>
          </DrawerHeader>
          <DrawerBody>
            <Heading size="lg" as="h4" mb={3}>Hi there</Heading>
            <p my={1}><Link to="https://github.com/Agezao/search-app-boilerplate" target="_blank">Github</Link></p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
