import { Image, Input } from "@chakra-ui/react"
import { Box, Flex, HStack, Button as ChakraButton, } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import { HiHeart } from "react-icons/hi"
import { useNavigate } from "react-router-dom";



function Navbar() {

  return (
    <>
      <Box id="box" bg="white" px={4} padding="10px 50px 10px 50px"  display="grid" position="fixed" z-index="1000"    width="100vw" >
        <Flex h={16} alignItems="center" justifyContent="space-between" margin="auto" z-index="1000">
          <HStack spacing={8} alignItems="center" z-index="1000">
            <Image
              height="30px"
              src="https://www.hindustantimes.com/ht-img/img/2024/11/24/1600x900/_baac5fc4-6b4e-11e6-b93e-ca6aaea15854_1732427573873.jpg"
            />
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              <ChakraButton variant="link">MEN</ChakraButton>
              <ChakraButton variant="link">WOMEN</ChakraButton>
              <ChakraButton variant="link">KIDS</ChakraButton>
              <ChakraButton variant="link">HOMES & LIVING</ChakraButton>
              <ChakraButton variant="link">BEAUTY</ChakraButton>
              <ChakraButton variant="link">STUDIO</ChakraButton>
            </HStack>
            <HStack as="nav" spacing={4} alignItems="center" justifyContent="space-around" display={{ base: "none", md: "flex", }}>
              <Input placeholder="Search for Products, Brand and more" variant="subtle" w="500px" />
               <Icon fontSize="3xl" color="black" ><HiHeart /></Icon>
              <a href="/login" ><img style={{width:"25px", height:"auto"}} src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" /></a>
            </HStack>

          </HStack>
        </Flex>
      </Box>
    </>
  );
}


export default Navbar
