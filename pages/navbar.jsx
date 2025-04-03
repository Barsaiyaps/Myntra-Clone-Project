import { 
  Box, Flex, HStack, Button, Image, Input, Icon, Menu,Portal} from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router"; // Fixed import

const Navbar = () => {
  return (
    <Box
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      px={6}
      py={3}
      width="100%"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        {/* Logo */}
        <Link to="/">
          <Image
            height="30px"
            src="https://www.hindustantimes.com/ht-img/img/2024/11/24/1600x900/_baac5fc4-6b4e-11e6-b93e-ca6aaea15854_1732427573873.jpg"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Button variant="link" colorScheme="blackAlpha">MEN</Button>
          <Button variant="link" colorScheme="blackAlpha">WOMEN</Button>
          <Button variant="link" colorScheme="blackAlpha">KIDS</Button>
          <Button variant="link" colorScheme="blackAlpha">HOME & LIVING</Button>
          <Button variant="link" colorScheme="blackAlpha">BEAUTY</Button>

          
        </HStack>

        {/* Search Bar & Icons */}
        <HStack spacing={4} alignItems="center">
          <Input placeholder="Search for Products, Brand and more" w={{ base: "200px", md: "400px", lg: "500px" }} />
          <Icon as={HiHeart} fontSize="2xl" color="black" cursor="pointer" />
          <Link to="/login">
            <Image
              width="30px"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
              alt="User Profile"
            />
          </Link>
        </HStack>
        {/* Admin Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          ADMIN
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
           <Link to={"/addProduct"}> <Menu.Item value="add-product">ADD PRODUCT</Menu.Item></Link>
           <Link to={"/dashboard"}> <Menu.Item value="dashboard">DASHBOARD...</Menu.Item></Link>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
          </Menu.Root>
      </Flex>
    </Box>
  );
};

export default Navbar;
