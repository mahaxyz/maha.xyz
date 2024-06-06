"use client";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import type { FC } from "react";
import Image from "next/image";

const StakedSection: FC = () => {
  return (
    <Box>
      <Flex h={268} mx={120} mt={200} gap={4}>
        <Box flex={8} position="relative">
          <Image src="/Vector_24.svg" alt="Staked_3" width={778} height={268} />
          <Box
            position="absolute"
            display="flex"
            top={16}
            left={20}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
          >
            <Text
              position="relative"
              letterSpacing="-0.05em"
              lineHeight="100%"
              fontSize="7.65rem"
              textTransform="uppercase"
              textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
              as="b"
            >
              200K+
            </Text>
            <Text
              position="relative"
              fontSize="2rem"
              fontWeight="500"
              opacity="0.4"
              color="#fff"
            >
              {`Total Value Locked (i) `}
            </Text>
          </Box>
        </Box>
        <Box flex={4} position="relative">
          <Image src="/Vector_31.svg" alt="Staked_3" width={388} height={268} />
          <Text
            position="absolute"
            fontWeight="700"
            fontSize="7.65rem"
            textTransform="uppercase"
            top="44%"
            left="50%"
            transform="translate(-50%, -50%)"
            as="b"
            fill="none"
            stroke="black"
            textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
          >
            200K
          </Text>
          <Text
            position="absolute"
            fontSize="1.25rem"
            top="72%"
            left="44%"
            transform="translate(-40%, -40%)"
            fontWeight="500"
            opacity="0.4"
            color="#fff"
          >
            {`Maha Staked (i)`}
          </Text>
        </Box>
      </Flex>

      <SimpleGrid columns={3} spacing={3} h={268} mx={120} mt={36}>
        <Box position="relative">
          <Image src="/Vector_31.svg" alt="Staked_3" width={388} height={268} />
          <Text
            position="absolute"
            fontWeight="700"
            fontSize="7.65rem"
            textTransform="uppercase"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
            as="b"
            fill="none"
            stroke="black"
            textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
          >
            200K
          </Text>
          <Text
            position="absolute"
            fontSize="1.25rem"
            top="70%"
            left="44%"
            transform="translate(-40%, -40%)"
            fontWeight="500"
            opacity="0.4"
            color="#fff"
          >
            {`Maha Staked (i)`}
          </Text>
        </Box>
        <Box position="relative">
          <Image src="/Vector_28.svg" alt="Staked_4" width={388} height={268} />
          <Text
            position="absolute"
            fontWeight="700"
            fontSize="7.65rem"
            textTransform="uppercase"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
            as="b"
            fill="none"
            stroke="black"
            textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
          >
            200K
          </Text>
          <Text
            position="absolute"
            fontSize="1.25rem"
            top="70%"
            left="44%"
            transform="translate(-40%, -40%)"
            fontWeight="500"
            opacity="0.4"
            color="#fff"
          >
            {`Maha Staked (i)`}
          </Text>
        </Box>
        <Box position="relative">
          <Image src="/Vector_31.svg" alt="Staked_5" width={388} height={268} />
          <Text
            position="absolute"
            fontWeight="700"
            fontSize="7.65rem"
            textTransform="uppercase"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
            as="b"
            fill="none"
            stroke="black"
            textShadow="2px 0 0 rgba(255, 255, 255, 0.3), 0 2px 0 rgba(255, 255, 255, 0.3), -2px 0 0 rgba(255, 255, 255, 0.3), 0 -2px 0 rgba(255, 255, 255, 0.3)"
          >
            200K
          </Text>
          <Text
            position="absolute"
            fontSize="1.25rem"
            top="70%"
            left="44%"
            transform="translate(-40%, -40%)"
            fontWeight="500"
            opacity="0.4"
            color="#fff"
          >
            {`Maha Staked (i)`}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default StakedSection;
