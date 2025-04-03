import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";

function Dashboard() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://user-product-order01.onrender.com/myapp/get-product");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setAllProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function productDelete(id) {
    try {
      const response = await fetch(`https://user-product-order01.onrender.com/myapp/delete-product/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product");

      // Remove deleted product from state
      setAllProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  }

  return (
    <Box margin="50px auto" padding="20px" width={"80%"}>
      <Heading mb={5} textAlign="center">
        Product Dashboard
      </Heading>

      {loading ? (
        <Flex justify="center" align="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      ) : error ? (
        <Text color="red.500" textAlign="center">
          {error}
        </Text>
      ) : (
        <Flex direction="column" gap={5}>
          {allProducts.length === 0 ? (
            <Text textAlign="center">No products available.</Text>
          ) : (
            allProducts.map((product) => (
              <Flex
                key={product._id}
                border="1px solid #ddd"
                padding="15px"
                borderRadius="8px"
                align="center"
                width="100%"
              >
                {/* Image aligned to the left */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={"auto"}
                  height={"100px"}
                  objectFit="cover"
                  borderRadius="5px"
                  mr={3} // Adds margin-right for spacing
                />

                {/* Title & Price in center */}
                <Flex direction="column" flex="1" align="center">
                  <Text fontWeight="bold">{product.title}</Text>
                  <Text color="teal.500" fontSize="lg">₹{product.price}</Text>
                </Flex>

                {/* Delete button aligned to the right */}
                <Button colorScheme="red" size="sm" onClick={() => productDelete(product._id)}>
                  DELETE
                </Button>
              </Flex>
            ))
          )}
        </Flex>
      )}
    </Box>
  );
}

export default Dashboard;
