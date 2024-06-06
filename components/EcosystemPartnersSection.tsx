"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const EcosystemPartnersSection: FC = () => {
  return (
    <Box
      width="full"
      height="364px"
      py="32px"
      px="120px"
      color="black"
      fontSize="xl"
      textAlign="center"
    >
      <Flex direction="row" marginBottom="64px">
        <Box
          bg="#181818"
          width="220px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding="24px"
          boxSizing="border-box"
          textAlign="left"
          fontSize="16px"
          color="#fff"
          fontFamily="'Kode Mono'"
        >
          <Text
            position="relative"
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontSize="16px"
            fontWeight="600"
          >
            Ecosystem Partners
          </Text>
        </Box>
        <Box
          bg="#181818"
          width="220px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding="24px"
          boxSizing="border-box"
          textAlign="left"
          fontSize="16px"
          color="#fff"
          fontFamily="'Kode Mono'"
          borderBottom="1px solid #fff"
          opacity="0.2"
        >
          <Text
            position="relative"
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontSize="16px"
            fontWeight="600"
          >
            Ecosystem Partners
          </Text>
        </Box>
        <Box
          bg="#181818"
          width="220px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding="24px"
          boxSizing="border-box"
          textAlign="left"
          fontSize="16px"
          color="#fff"
          fontFamily="'Kode Mono'"
          borderBottom="1px solid #fff"
          opacity="0.2"
        >
          <Text
            position="relative"
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontSize="16px"
            fontWeight="600"
          >
            Ecosystem Partners
          </Text>
        </Box>
      </Flex>
      <Box height="28px" width="100%" marginBottom="56px">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Image src="/Logo_1.svg" alt="Image 1" />
          <Image src="/Logo_2.svg" alt="Image 2" />
          <Image src="/Logo_3.svg" alt="Image 3" />
          <Image src="/Logo_4.svg" alt="Image 4" />
          <Image src="/Logo_5.svg" alt="Image 5" />
          <Image src="/Logo_6.svg" alt="Image 6" />
        </Flex>
      </Box>
      <Box borderBottom="1px solid #181818" width="100%" height="1px" />
      <Box height="28px" width="100%" marginTop="56px">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Image src="/Logo_1.svg" alt="Image 1" />
          <Image src="/Logo_2.svg" alt="Image 2" />
          <Image src="/Logo_3.svg" alt="Image 3" />
          <Image src="/Logo_4.svg" alt="Image 4" />
          <Image src="/Logo_5.svg" alt="Image 5" />
          <Image src="/Logo_6.svg" alt="Image 6" />
        </Flex>
      </Box>
    </Box>
  );
};

export default EcosystemPartnersSection;
