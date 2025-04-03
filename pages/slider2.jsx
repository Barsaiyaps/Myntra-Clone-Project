import { useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";

const SlidingWindow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6; // Number of images per slide
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <Box position="relative" width="100%" overflow="hidden" mt={4}>
      {/* Slider Container */}
      <Flex align="center" justify="center">
      
        <Box overflow="hidden" width="90%">
          <Flex
            transition="transform 1s ease-in-out"
            transform={`translateX(-${currentIndex * 100}%)`}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <Flex
                key={slideIndex}
                minWidth="100%"
                justify="space-around"
                align="center"
              >
                {items
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((item, index) => (
                    <Box key={index} p={2}>
                      {item}
                    </Box>
                  ))}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>

      {/* Navigation Dots */}
      <HStack justify="center" mt={3}>
        {Array.from({ length: totalSlides }).map((_, index) => (
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

function Slider2() {
  const items = [
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/a9734bdc-8054-4806-8ab4-748d7dfdfe411691066316796-unnamed---2023-08-03T180830.165.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/30ce6d77-d4f5-4bed-b89a-c9cf00d197b81691142723203-image_png2141362199.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png" />,
    <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png" />,
  ];

  return <SlidingWindow items={items} />;
}

export default Slider2;
