"use client";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

const SupportedCollateralsSection: FC = () => {
  return (
    <Box
      height="500px"
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
        fontSize="3.5rem"
        color="#FF4D00"
      >
        <Text as="b" fontWeight="700">
          Supported collaterals
        </Text>
        <Box
          alignSelf="stretch"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          fontSize="1.5rem"
          color="rgba(255, 255, 255, 0.3)"
        >
          <Text width="770px" fontWeight="600">
            USDz can be borrowed using these tokens as collaterals
          </Text>
        </Box>
      </VStack>
      <Flex
        direction="row"
        align="flex-start"
        justify="flex-start"
        gap={9}
        textAlign="center"
        fontSize="2rem"
        color="white"
        marginTop="5rem"
      >
        {[...Array(6)].map((_, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            justify="flex-start"
            gap="1.5rem"
          >
            <Image
              width={20}
              height={20}
              borderRadius="full"
              objectFit="cover"
              src="/Screenshot_1.svg"
              alt=""
            />
            <Box textAlign="center" fontWeight="600">
              <Text margin="0" fontWeight="600">
                cbETH
              </Text>
              <Text margin="0" fontSize="1rem" fontWeight="600">
                CoinbaseEth
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default SupportedCollateralsSection;
