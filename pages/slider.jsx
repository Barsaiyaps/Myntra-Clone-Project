import { useState, useEffect } from "react";
import { Box, Button, Flex, Image, HStack } from "@chakra-ui/react";

const SlidingWindow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Slider Container */}
      <Flex justify="center" align="center">
        <Box display="flex" width="100%" overflow="hidden">
          <Box
            display="flex"
            width="100%"
            transition="transform 2s ease-in-out"
            transform={`translateX(-${currentIndex * 100}%)`}
          >
            {items.map((item, index) => (
              <Box key={index} minWidth="100%">
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>

      {/* Navigation Dots */}
      <HStack justify="center" spacing={2} mt={2}>
        {items.map((_, index) => (
          <Box
            key={index}
            width={3}
            height={3}
            bg={currentIndex === index ? "teal.500" : "gray.300"}
            borderRadius="full"
            cursor="pointer"
            transition="background 0.3s"
            onClick={() => goToSlide(index)}
          />
        ))}
      </HStack>
    </Box>
  );
};

function Slider() {
  const items = [
    <Image
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
      width="100%"
      height="auto"
    />,
    <Image
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
      width="100%"
      height="auto"
    />,
    <Image
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
      width="100%"
      height="auto"
    />,
  ];

  return <SlidingWindow items={items} />;
}

export default Slider;
