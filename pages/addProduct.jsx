import { useState } from "react";
import { Box, Text, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const AddProduct = () => {

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addProduct(product); 
    console.log("Product Data:", product);
  };

  const addProduct = async (productData) => {
    try {
      console.log(productData)
      const response = await fetch("https://user-product-order01.onrender.com/myapp/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Product added successfully:", data);
      return data;
    } catch (error) {
      console.error("Failed to add product:", error.message);
    }
  };

  return (
    <Box m="100px" p="50px" maxW="600px" mx="auto" boxShadow="md" borderRadius="lg">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Add New Product
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Input placeholder="Enter the title" name="title" value={product.title} onChange={handleChange} />
          <Input placeholder="Enter the Price" name="price" type="number" value={product.price} onChange={handleChange} />
          <Textarea placeholder="Description" name="description" value={product.description} onChange={handleChange} />
          <Input placeholder="Category" name="category" value={product.category} onChange={handleChange} />
          <Input placeholder="Enter Image URL" name="image" value={product.image} onChange={handleChange} />
          <Button type="submit" colorScheme="blue" w="full">
            Add Product
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddProduct;
