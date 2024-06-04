"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Kode_Mono } from "next/font/google";

const kodeMono500 = Kode_Mono({ weight: "500", subsets: ["latin"] });
const kodeMono700 = Kode_Mono({ weight: "700", subsets: ["latin"] });

const HomePage: NextPage = () => {
  return (
    <Box bg="#000" height="100%" width="100%">
      <Header />
      <Box>
        <Flex
          paddingX="42px"
          gap="24px"
          justifyContent="center"
          alignItems="center"
        >
          <Box flex="1" position="relative">
            <Image
              src="/Vector_29.svg"
              alt="Maha Yellow SVG"
              objectFit="contain"
            />
            <Box
              width="608px"
              position="absolute"
              top="226px"
              left="329px"
              transform="translate(-50%, -50%)"
              fontSize="72px"
              letterSpacing="-0.05em"
              lineHeight="110%"
              display="inline-block"
              fontFamily="'Kode Mono', monospace"
              textAlign="left"
              color="#110f10"
            >
              <Text
                className={kodeMono700.className}
                margin="0"
                fontWeight="700"
              >{`Deposit LRTs, `}</Text>
              <Text
                className={kodeMono700.className}
                margin="0"
                fontWeight="700"
              >{`Borrow USDz.`}</Text>
              <Text
                className={kodeMono700.className}
                margin="0"
                color="#ff4d00"
                fontWeight="700"
              >{`Interest Free`}</Text>
            </Box>
            <Box
              width="524px"
              position="absolute"
              top="452px"
              left="290px"
              transform="translate(-50%, -50%)"
              fontSize="32px"
              letterSpacing="-0.05em"
              lineHeight="120%"
              display="inline-block"
              fontFamily="'Kode Mono', monospace"
              textAlign="left"
              color="#110f10"
            >
              <Text
                className={kodeMono500.className}
                margin="0"
                fontWeight="500"
              >{`Earn real yield by borrowing a low fixed-rate stablecoin using your LRTs (liquid restaking tokens).`}</Text>
            </Box>
          </Box>
          <Box flex="1" bg="#000" position="relative">
            <Image
              src="/Vector_30.svg"
              alt="Maha Orange SVG"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Box>

      <Box height="267px" marginX="120px" marginTop="202px">
        <Flex height="100%">
          <Box flex="8" position="relative" color="#fff" paddingRight="16px">
            <Image
              src="/Vector_24.svg"
              alt=""
              position="absolute"
              height="100%"
              width="100%"
              top="0"
              right="0px"
              bottom="0"
              left="0"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="15.38%"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200K+
              </Text>
              <Text
                className={kodeMono500.className}
                width="223px"
                position="relative"
                fontSize="32px"
                lineHeight="120%"
                fontWeight="500"
                display="inline-block"
                flexShrink="0"
                opacity="0.4"
              >
                {`Total Value Locked (i) `}
              </Text>
            </Box>
          </Box>
          <Box flex="4" position="relative" color="#fff">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="absolute"
              height="100%"
              width="100%"
              top="0"
              right="0"
              bottom="0"
              left="32px"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="25.38%"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200
              </Text>
              <Text
                className={kodeMono500.className}
                width="223px"
                position="relative"
                fontSize="24px"
                lineHeight="120%"
                fontWeight="500"
                display="inline-block"
                flexShrink="0"
                opacity="0.4"
              >
                {`ZAI Market Cap `}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box height="267px" marginTop="36px">
        <Flex height="100%" gap="16px">
          <Box flex="4" marginLeft="88px" position="relative" color="#fff">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="absolute"
              height="100%"
              width="100%"
              top="0"
              right="0"
              bottom="0"
              left="32px"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="25.38%"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200
              </Text>
              <Text
                className={kodeMono500.className}
                width="223px"
                position="relative"
                fontSize="24px"
                lineHeight="120%"
                fontWeight="500"
                display="inline-block"
                flexShrink="0"
                opacity="0.4"
              >
                {`Maha Staked (i)`}
              </Text>
            </Box>
          </Box>

          <Box flex="4" position="relative" color="#fff">
            <Image
              src="/Vector_28.svg"
              alt=""
              position="absolute"
              height="100%"
              width="100%"
              top="0"
              right="0"
              bottom="0"
              left="32px"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="20.38%"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200
              </Text>
              <Text
                className={kodeMono500.className}
                width="223px"
                position="relative"
                fontSize="24px"
                lineHeight="120%"
                fontWeight="500"
                display="inline-block"
                flexShrink="0"
                opacity="0.4"
              >
                {`Maha Staked (i)`}
              </Text>
            </Box>
          </Box>

          <Box flex="4" position="relative" marginRight="120px" color="#fff">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="absolute"
              height="100%"
              width="100%"
              top="0"
              right="0"
              bottom="0"
              left="32px"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="30.38%"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200
              </Text>
              <Text
                className={kodeMono500.className}
                width="223px"
                position="relative"
                fontSize="24px"
                lineHeight="120%"
                fontWeight="500"
                display="inline-block"
                flexShrink="0"
                opacity="0.4"
              >
                {`Maha Staked (i) `}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
