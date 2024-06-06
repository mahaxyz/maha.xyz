"use client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import type { FC } from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <Box p={4}>
      <SimpleGrid columns={[1,2]} spacing={3} h={752}>
        <Box position="relative">
          <Image src="/Vector_29.svg" alt="Intro" width={672} height={752} />
          <Box
            position="absolute"
            top="0rem"
            px="3rem"
            mt="4rem"
            color="#110f10"
            fontSize={{ base: "2.25rem", md: "4rem" }}
          >
            <Text fontWeight="700">Deposit LRTs,</Text>
            <Text fontWeight="700">Borrow USDz.</Text>
            <Text fontWeight="700" color="#FF4D00">
              Interest Free
            </Text>
            <Box mt="2rem">
              <Text
                fontWeight="500"
                fontSize={{ base: "1.25rem", md: "2.25rem" }}
                color="#110f10"
                textAlign="left"
              >
                Earn real yield by borrowing a low fixed-rate stablecoin using
                your LRTs (liquid restaking tokens).
              </Text>
            </Box>
          </Box>
        </Box>
        <Box position="relative">
          <Image src="/Vector_30.svg" alt="Intro" width={672} height={752} />
          <Text
            position="absolute"
            fontSize="xl"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="black"
          >
            Box 2
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
