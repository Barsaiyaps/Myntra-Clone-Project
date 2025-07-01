import { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import Slider from "./slider";
import Slider2 from "./slider2";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch("https://user-product-order01.onrender.com/myapp/get-product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box p={6}>

    <Slider />
      
      <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} gap={6} margin={"20px"}>
        {products.map((product) => (
          <Box key={product._id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            {/* Product Image */}
            <Image src={product.image} alt={product.title} width="100%" height="300px" objectFit="cover" />

            {/* Product Details */}
            <Box p={4} textAlign="center">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                {product.title}
              </Text>
              <Text fontSize="md" color="gray.600" mb={2}>
                ₹{product.price}
              </Text>

              {/* Action Buttons */}
              <Flex justify="center" gap={3} mt={3}>
                <Button size="sm" colorScheme="blue">View Details</Button>
                <Button size="sm" colorScheme="green">Add to Cart</Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Reload Button */}
      <Flex justify="center" mb={6} margin={"10px"}>
        <Button colorScheme="teal" onClick={fetchData} isLoading={loading} loadingText="Loading...">
          Reload Products
        </Button>
      </Flex>

      <Slider2 />
    </Box>
  );
}

export default Home;

