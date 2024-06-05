"use client";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Kode_Mono } from "next/font/google";

const kodeMono500 = Kode_Mono({ weight: "500", subsets: ["latin"] });
const kodeMono600 = Kode_Mono({ weight: "600", subsets: ["latin"] });
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
          <Box flex="8" position="relative" paddingRight="16px">
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
              gap="8px"
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
                color="#fff"
              >
                {`Total Value Locked (i) `}
              </Text>
            </Box>
          </Box>
          <Box flex="4" position="relative">
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
              flexDirection="column"
              display="flex"
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
                fill="none"
                stroke="black"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200K
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
                color="#fff"
              >
                {`ZAI Market Cap `}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box height="268px" marginTop="36px">
        <Flex height="100%" gap="16px">
          <Box flex="4" marginLeft="88px" position="relative">
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
              flexDirection="column"
              display="flex"
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
                fill="none"
                stroke="black"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200K
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
                color="#fff"
              >
                {`Maha Staked (i)`}
              </Text>
            </Box>
          </Box>

          <Box flex="4" position="relative">
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
              alignItems="center"
              justifyContent="flex-start"
              gap="4px"
              flexDirection="column"
              display="flex"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="122.59px"
                textTransform="uppercase"
                as="b"
                fill="none"
                stroke="black"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
              >
                200K
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
                color="#fff"
              >
                {`Maha Staked (i)`}
              </Text>
            </Box>
          </Box>

          <Box flex="4" position="relative" marginRight="120px">
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
              left="20.38%"
              flexDirection="column"
              display="flex"
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
                fill="none"
                stroke="black"
                textTransform="uppercase"
                textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
                as="b"
              >
                200K
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
                color="#fff"
              >
                {`Maha Staked (i) `}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box marginLeft="120px" marginRight="88px" marginTop="20%" height="400px">
        <Flex height="100%" alignItems="stretch">
          <Box flex="4" mr="16px">
            <Image
              src="/Vector_27.svg"
              alt=""
              height="100%"
              width="100%"
              maxWidth="100%"
              maxHeight="100%"
              overflow="hidden"
            />
            <Box
              position="absolute"
              top="38.7%"
              left="11%"
              width="100%"
              height="100%"
            >
              <Image
                src="/Morflax_shift_logo_8_2.svg"
                alt=""
                objectFit="cover"
              />
            </Box>
            <Box
              position="absolute"
              top="39.7%"
              left="16%"
              width="100%"
              height="100%"
            >
              <Image
                src="/Morflax_shift_logo_8_1.svg"
                alt=""
                objectFit="cover"
              />
            </Box>
            <Text
              className={kodeMono700.className}
              position="absolute"
              top="45.4%"
              left="13%"
              width="100%"
              fontSize="40px"
              color="#000"
            >{`ZAI ($USDZ)`}</Text>
          </Box>
          <Box flex="8" ml="16px" position="relative">
            <Image
              src="/Vector_25.svg"
              alt=""
              height="100%"
              width="100%"
              maxWidth="100%"
              maxHeight="100%"
              overflow="hidden"
            />
            <Box
              width="622px"
              position="absolute"
              top="36%"
              left="8%"
              fontSize="24px"
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontWeight="600"
              fontFamily="Kode Mono"
              color="#000"
              textAlign="left"
              display="inline-block"
            >
              <Text
                className={kodeMono600.className}
                width="100%"
                fontSize="24px"
                lineHeight="120%"
                fontWeight="500"
                display="flex"
                flexShrink="0"
              >
                {`ZAI (USDz) is an yield bearing stablecoin that can be borrowed using liquid restaking tokens at 0% interest fee.`}
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                position="relative"
                width="100%"
                gap="32px"
                marginTop="24px"
              >
                <Box
                  position="relative"
                  width="100%"
                  height="52px"
                  textAlign="left"
                  fontSize="24px"
                  color="#110f10"
                  fontFamily="Kode Mono"
                >
                  <Image
                    src="Vector_33_orange.svg"
                    alt=""
                    position="relative"
                    top="0"
                    left="0"
                    width="196px"
                    height="48px"
                  />
                  <Text
                    className={kodeMono600.className}
                    position="absolute"
                    top="12px"
                    left="14px"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Learn More
                  </Text>
                  <Image
                    src="Arrow_right_yellow.svg"
                    alt=""
                    position="absolute"
                    height="32%"
                    width="8%"
                    top="36%"
                    right="0%"
                    bottom="36%"
                    left="56%"
                    maxWidth="100%"
                    overflow="hidden"
                    maxHeight="100%"
                  />
                </Box>
                <Box
                  position="relative"
                  width="100%"
                  height="52px"
                  textAlign="left"
                  fontSize="24px"
                  color="#110f10"
                  fontFamily="Kode Mono"
                  right="12%"
                >
                  <Image
                    src="Vector_33_white.svg"
                    alt=""
                    position="relative"
                    top="0"
                    left="0"
                    width="196px"
                    height="48px"
                  />
                  <Text
                    className={kodeMono600.className}
                    position="absolute"
                    top="12px"
                    left="14px"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Learn More
                  </Text>
                  <Image
                    src="Arrow_right_black.svg"
                    alt=""
                    position="absolute"
                    height="32%"
                    width="8%"
                    top="36%"
                    right="0%"
                    bottom="36%"
                    left="53%"
                    maxWidth="100%"
                    overflow="hidden"
                    maxHeight="100%"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        width="100%"
        height="500px"
        color="white"
        fontSize="xl"
        textAlign="center"
        marginTop="48px"
        paddingTop="28px"
        paddingX="232px"
      >
        <VStack
          width="100%"
          position="relative"
          alignItems="center"
          justifyContent="flex-start"
          spacing={3}
          textAlign="center"
          fontSize="54px"
          color="#FF4D00"
          fontFamily="Kode Mono"
        >
          <Text as="b" lineHeight="118.12%" className={kodeMono700.className}>
            Supported collaterals
          </Text>
          <Box
            alignSelf="stretch"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            fontSize="24px"
            color="rgba(255, 255, 255, 0.3)"
          >
            <Text
              className={kodeMono600.className}
              width="770px"
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontWeight="600"
              display="inline-block"
            >
              USDz can be borrowed using these tokens as collaterals
            </Text>
          </Box>
        </VStack>
        <Flex
          width="100%"
          direction="row"
          align="flex-start"
          justify="flex-start"
          gap="48px"
          textAlign="center"
          fontSize="32px"
          color="white"
          marginTop="72px"
          fontFamily="'Kode Mono'"
        >
          {[...Array(6)].map((_, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              justify="flex-start"
              gap="22px"
            >
              <Image
                width="76px"
                height="76px"
                borderRadius="full"
                objectFit="cover"
                src="/Screenshot_1.svg"
                alt=""
              />
              <Box
                textAlign="center"
                lineHeight="120%"
                fontWeight="600"
                letterSpacing="-0.03em"
              >
                <Text margin="0" className={kodeMono600.className}>
                  cbETH
                </Text>
                <Text
                  margin="0"
                  fontSize="16px"
                  className={kodeMono600.className}
                >
                  CoinbaseEth
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box
        width="100%"
        height="440px"
        paddingX="136px"
        paddingTop="52px"
        paddingBottom="32px"
        color="black"
        fontSize="xl"
        textAlign="center"
      >
        <Text fontSize="54px" className={kodeMono700.className} color="#ff4d00">
          How it works?
        </Text>
        <Flex direction="row">
          <Box height="208px" position="relative" marginTop="20px">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="relative"
              height="100%"
              width="100%"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="20%"
              right="31.13%"
              bottom="32.09%"
              left="76%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono600.className}
                width="280px"
                position="absolute"
                fontSize="24px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                right="10%"
                opacity="0.3"
                color="#fff"
                letterSpacing="-0.03em"
              >
                {`01`}
              </Text>
            </Box>
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="0%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="24px"
                color="#daff02"
              >
                Borrow
              </Text>
              <Text
                className={kodeMono500.className}
                width="280px"
                position="relative"
                fontSize="16px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                opacity="0.3"
                color="#fff"
                left="4.5%"
                letterSpacing="-0.03em"
                marginTop="12px"
                paddingLeft="40px"
              >
                {`Deposit your LRTs as collateral. Decide the interest fee you would like to pay. Borrow USDz.  `}
              </Text>
            </Box>
          </Box>
          <Box height="60px" width="144px" marginTop="120px">
            <Image
              src="/link_up_bottom.svg"
              alt=""
              position="relative"
              height="100%"
              width="100%"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
          </Box>
          <Box height="208px" position="relative" marginTop="84px">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="relative"
              height="100%"
              width="100%"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="20%"
              right="31.13%"
              bottom="32.09%"
              left="76%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono600.className}
                width="280px"
                position="absolute"
                fontSize="24px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                right="10%"
                opacity="0.3"
                color="#fff"
                letterSpacing="-0.03em"
              >
                {`02`}
              </Text>
            </Box>
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="5%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="24px"
                color="#daff02"
              >
                Earn
              </Text>
              <Text
                className={kodeMono500.className}
                width="280px"
                position="relative"
                fontSize="16px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                opacity="0.3"
                color="#fff"
                left="4.5%"
                letterSpacing="-0.03em"
                marginTop="12px"
                paddingLeft="40px"
              >
                {`Earn with USDz by participating in the stability pool, or farming opportunities across DeFi or simply holding USDz.`}
              </Text>
            </Box>
          </Box>
          <Box height="60px" width="144px" marginTop="120px">
            <Image
              src="/link_bottom_up.svg"
              alt=""
              position="relative"
              height="100%"
              width="100%"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
          </Box>
          <Box height="208px" position="relative" marginTop="20px">
            <Image
              src="/Vector_31.svg"
              alt=""
              position="relative"
              height="100%"
              width="100%"
              maxWidth="100%"
              overflow="hidden"
              maxHeight="100%"
            />
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="20%"
              right="31.13%"
              bottom="32.09%"
              left="76%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono600.className}
                width="280px"
                position="absolute"
                fontSize="24px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                right="10%"
                opacity="0.3"
                color="#fff"
                letterSpacing="-0.03em"
              >
                {`03`}
              </Text>
            </Box>
            <Box
              position="absolute"
              height="45.9%"
              width="73.49%"
              top="28.01%"
              right="11.13%"
              bottom="32.09%"
              left="5%"
              flexDirection="column"
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Text
                className={kodeMono700.className}
                position="relative"
                letterSpacing="-0.05em"
                lineHeight="100%"
                fontSize="24px"
                color="#daff02"
              >
                Redeem
              </Text>
              <Text
                className={kodeMono500.className}
                width="280px"
                position="relative"
                fontSize="16px"
                lineHeight="120%"
                display="inline-block"
                flexShrink="0"
                opacity="0.3"
                color="#fff"
                left="4.5%"
                letterSpacing="-0.03em"
                marginTop="12px"
                paddingLeft="40px"
              >
                {`Redeem your collateral at any time by repaying your loan with USDz.`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

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
              className={kodeMono600.className}
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
              className={kodeMono600.className}
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
              className={kodeMono600.className}
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

      <Box
        width="100vw"
        height="760px"
        paddingX="120px"
        paddingY="32px"
        alignContent="start"
      >
        <Box
          width="72%"
          position="relative"
          backgroundColor="#181818"
          height="132.7px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="24px"
          marginRight="24px"
        >
          <Text
            className={kodeMono700.className}
            width="616px"
            fontSize="54px"
            lineHeight="118.12%"
            display="inline-block"
            color="#ff4d00"
            textAlign="center"
          >
            Audits and Security
          </Text>
        </Box>
        <Box
          left="70.5%"
          width="20%"
          top="78.6%"
          position="absolute"
          borderRadius="21px"
          background="linear-gradient(180deg, rgba(41, 39, 40, 0), #292728)"
          height="226px"
        />
        <Box
          left="18.65%"
          width="50%"
          top="78.6%"
          position="absolute"
          borderRadius="21px"
          background="#181818"
          height="226px"
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
